import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/lib/models/contact';

// EmailJS configuration from environment or fallback to hardcoded values
// Note: For server-side requests, use EMAILJS_PRIVATE_KEY instead of the public key
const EMAILJS_CONFIG = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_x7nwfng',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_u98mcuj',
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_USER_ID || 'Iaq7K27hpD8vrd15W',
    privateKey: process.env.EMAILJS_PRIVATE_KEY || '', // Server-side private key
};

export async function POST(request: NextRequest) {
    try {
        // Parse request body
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Connect to MongoDB
        await connectDB();

        // Save to database
        const contact = await Contact.create({
            name,
            email,
            subject,
            message,
            status: 'new',
        });

        console.log('📧 Contact form submission saved:', contact._id);

        // Send email notification via EmailJS
        try {
            // Check if private key is configured
            if (!EMAILJS_CONFIG.privateKey) {
                console.warn('⚠️ EmailJS private key not configured. Skipping email notification.');
                console.warn('💡 To enable email notifications, add EMAILJS_PRIVATE_KEY to your .env.local file');
            } else {
                const emailData = {
                    service_id: EMAILJS_CONFIG.serviceId,
                    template_id: EMAILJS_CONFIG.templateId,
                    user_id: EMAILJS_CONFIG.publicKey,
                    template_params: {
                        from_name: name,
                        from_email: email,
                        subject: subject,
                        message: message,
                        to_name: 'Naman Kumar',
                    },
                    accessToken: EMAILJS_CONFIG.privateKey, // Required for server-side requests
                };

                const emailResponse = await fetch(
                    'https://api.emailjs.com/api/v1.0/email/send',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(emailData),
                    }
                );

                if (emailResponse.ok) {
                    console.log('✅ Email notification sent successfully');
                } else {
                    const errorText = await emailResponse.text();
                    console.warn('⚠️ Email notification failed:', emailResponse.status, errorText);
                }
            }
        } catch (emailError) {
            console.error('⚠️ EmailJS error:', emailError);
            // Continue even if email fails - data is already saved
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Message received! I will get back to you soon.',
                contactId: contact._id,
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('❌ Contact form error:', error);

        // Handle validation errors
        if (error.name === 'ValidationError') {
            return NextResponse.json(
                { error: 'Invalid form data', details: error.message },
                { status: 400 }
            );
        }

        // Handle MongoDB connection errors
        if (error.message?.includes('MONGODB_URI')) {
            return NextResponse.json(
                { error: 'Database configuration error. Please try again later.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: 'Something went wrong. Please try again later.' },
            { status: 500 }
        );
    }
}

// Optional: GET endpoint to retrieve contacts (for admin purposes)
export async function GET(request: NextRequest) {
    try {
        // You can add authentication here before allowing access
        await connectDB();

        const contacts = await Contact.find()
            .sort({ createdAt: -1 })
            .limit(50)
            .select('-__v');

        return NextResponse.json({
            success: true,
            count: contacts.length,
            contacts,
        });
    } catch (error) {
        console.error('❌ Error fetching contacts:', error);
        return NextResponse.json(
            { error: 'Failed to fetch contacts' },
            { status: 500 }
        );
    }
}
