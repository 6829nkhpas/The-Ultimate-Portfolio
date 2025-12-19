# MongoDB Contact Form Setup

## Quick Setup Guide

Your portfolio contact form is now integrated with MongoDB! Follow these steps to complete the setup:

### Step 1: Set Up MongoDB

Choose one of the following options:

#### Option A: MongoDB Atlas (Recommended - Free Cloud Database)

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Sign up or log in
3. Create a new cluster (free tier available)
4. Click "Connect" → "Connect your application"
5. Copy the connection string

#### Option B: Local MongoDB

If you have MongoDB installed locally, use:
```
mongodb://localhost:27017/portfolio
```

### Step 2: Create Environment File

1. Copy the example file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and replace the placeholder with your MongoDB connection string:
   ```env
   MONGODB_URI=your-actual-mongodb-connection-string-here
   ```

   **Important**: Replace `your-username`, `your-password`, and `your-cluster` with your actual credentials.

### Step 3: Restart Dev Server

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

## Testing the Contact Form

1. Open your portfolio at `http://localhost:3000`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your MongoDB database to confirm the data was saved
5. You should also receive an email notification via EmailJS

## API Endpoints

### POST /api/contact
Submit a contact form entry
- **Body**: `{ name, email, subject, message }`
- **Response**: `{ success: true, message: string, contactId: string }`

### GET /api/contact (Admin Only)
Retrieve all contact submissions
- **Response**: `{ success: true, count: number, contacts: Array }`

## Database Schema

Contact submissions are stored with the following structure:

```typescript
{
  name: string,        // max 100 characters
  email: string,       // validated email format
  subject: string,     // max 200 characters
  message: string,     // max 2000 characters
  status: 'new' | 'read' | 'replied',
  createdAt: Date,
  updatedAt: Date
}
```

## Features

✅ **MongoDB Storage**: All form submissions are saved to your database  
✅ **Email Notifications**: Continues to send emails via EmailJS  
✅ **Validation**: Server-side validation for all fields  
✅ **Error Handling**: Graceful error handling with user-friendly messages  
✅ **Status Tracking**: Track submission status (new/read/replied)  
✅ **Timestamps**: Automatic timestamps for all entries  

## Troubleshooting

### "Database configuration error"
- Check that `MONGODB_URI` is set in `.env.local`
- Verify your MongoDB connection string is correct
- Ensure your IP is whitelisted in MongoDB Atlas

### Form submissions not saving
- Check the browser console for errors
- Check the terminal/server logs for MongoDB connection errors
- Verify mongoose was installed: `npm list mongoose`

### Email still works but database doesn't save
- The system will still send emails even if MongoDB is down
- Check your MongoDB connection string
- Verify MongoDB is running (if using local)

## Security Notes

- `.env.local` is automatically ignored by git
- Never commit your MongoDB connection string to version control
- The example file (`.env.local.example`) is safe to commit
- Consider adding authentication to the GET endpoint for production

## Next Steps

Want to view your submissions? You can:
1. Use MongoDB Compass (GUI tool)
2. Access the API at `http://localhost:3000/api/contact` (GET)
3. Build an admin dashboard (future enhancement)
