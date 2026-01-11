# SMTP Email Integration Setup Guide

## Overview
Your contact form is now integrated with SMTP email functionality. When users submit the contact form, two emails will be sent:
1. **Notification email to owner** - Contains the form submission details
2. **Auto-reply to user** - Confirmation that their message was received

## Setup Instructions

### 1. Configure Environment Variables

Open the `.env.local` file and replace the placeholder values with your actual SMTP credentials:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
OWNER_EMAIL=owner@xpertbrand.com
```

### 2. Email Provider Configuration

#### For Gmail:
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the App Password (not your regular password) for `SMTP_PASSWORD`

#### For Other Providers:
- **Outlook/Hotmail**: `smtp.office365.com`, port `587`
- **Yahoo**: `smtp.mail.yahoo.com`, port `587`
- **SendGrid**: `smtp.sendgrid.net`, port `587`
- **Mailgun**: `smtp.mailgun.org`, port `587`

### 3. Restart Development Server

After configuring the environment variables, restart your development server:

```bash
npm run dev
```

## Features

### Email Templates
Both emails include professional HTML templates with:
- Responsive design
- XpertBrand branding (orange #FF5900 color scheme)
- Clear formatting and readability
- Contact information and call-to-action buttons

### Owner Notification Email Includes:
- Sender's name and email (with reply-to functionality)
- Service they're interested in
- Full message content
- Direct "Reply" button

### User Auto-Reply Includes:
- Personalized greeting
- Confirmation of message receipt
- "What happens next" section
- Copy of their submitted message
- Link to view portfolio
- Contact information and social links

### Form Features:
- Real-time validation
- Loading state during submission
- Success/error messages
- Form reset after successful submission
- Disabled state to prevent double submissions

## Testing

1. Fill out the contact form on `/contact-us` page
2. Submit the form
3. Check that:
   - Success message appears
   - Owner receives notification email
   - User receives auto-reply confirmation

## Troubleshooting

### Common Issues:

**"Failed to send email" error:**
- Verify SMTP credentials are correct
- Check that App Password is used (for Gmail)
- Ensure SMTP port is not blocked by firewall
- Verify email provider allows SMTP connections

**Email not received:**
- Check spam/junk folder
- Verify `OWNER_EMAIL` is correct
- Test with a different email provider
- Check server logs for errors

**Form not submitting:**
- Open browser console to check for errors
- Verify API route is accessible at `/api/contact`
- Check that all required fields are filled

## Security Notes

- `.env.local` is already included in `.gitignore` to protect credentials
- Never commit SMTP credentials to version control
- Use App Passwords instead of regular passwords
- Consider using environment-specific variables for production

## API Endpoint

**POST** `/api/contact`

Request body:
```json
{
  "name": "string",
  "email": "string",
  "service": "string",
  "message": "string"
}
```

Response:
- `200`: Success
- `400`: Missing required fields
- `500`: Server/email error

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables in your hosting platform's settings
2. Use production SMTP credentials
3. Update `OWNER_EMAIL` to the actual business email
4. Test thoroughly before going live

## Support

For issues or questions, refer to:
- [Nodemailer Documentation](https://nodemailer.com/)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
