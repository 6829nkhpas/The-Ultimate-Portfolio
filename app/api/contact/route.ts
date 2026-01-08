import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/lib/models/contact';
import nodemailer from 'nodemailer';

// Email configuration using Nodemailer with Gmail SMTP
// For Gmail, you need to use an "App Password" instead of your regular password
// Get it from: Google Account > Security > 2-Step Verification > App Passwords
const createEmailTransporter = () => {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
        return null;
    }

    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
    });
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

        // Send email notification via Nodemailer
        try {
            const transporter = createEmailTransporter();

            if (!transporter) {
                console.warn('⚠️ Email credentials not configured. Skipping email notification.');
                console.warn('💡 To enable email notifications, add EMAIL_USER and EMAIL_APP_PASSWORD to your .env.local file');
            } else {
                const emailHtml = `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
                            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                            .field { margin-bottom: 20px; }
                            .label { font-weight: bold; color: #667eea; }
                            .value { padding: 10px; background: white; border-left: 3px solid #667eea; margin-top: 5px; }
                            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="header">
                                <h1 style="margin: 0;">📧 New Contact Form Submission</h1>
                                <p style="margin: 10px 0 0 0; opacity: 0.9;">From your portfolio website</p>
                            </div>
                            <div class="content">
                                <div class="field">
                                    <div class="label">👤 Name:</div>
                                    <div class="value">${name}</div>
                                </div>
                                <div class="field">
                                    <div class="label">📧 Email:</div>
                                    <div class="value"><a href="mailto:${email}">${email}</a></div>
                                </div>
                                <div class="field">
                                    <div class="label">📝 Subject:</div>
                                    <div class="value">${subject}</div>
                                </div>
                                <div class="field">
                                    <div class="label">💬 Message:</div>
                                    <div class="value">${message.replace(/\n/g, '<br>')}</div>
                                </div>
                            </div>
                            <div class="footer">
                                <p>This email was sent from your portfolio contact form</p>
                            </div>
                        </div>
                    </body>
                    </html>
                `;

                await transporter.sendMail({
                    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
                    to: process.env.EMAIL_USER,
                    replyTo: email,
                    subject: `Portfolio Contact: ${subject}`,
                    html: emailHtml,
                    text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
                    `.trim(),
                });

                console.log('✅ Email notification sent successfully via Nodemailer');
            }
        } catch (emailError) {
            console.error('⚠️ Email sending error:', emailError);
            // Continue even if email fails - data is already saved to MongoDB
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
