import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service
    // Options:
    // 1. SendGrid - Set SENDGRID_API_KEY in .env.local
    // 2. Resend - Set RESEND_API_KEY in .env.local
    // 3. Gmail - Set Gmail credentials in .env.local
    // 4. Custom SMTP - Configure in .env.local

    // For now, log the submission and return success
    console.log('New lead submission:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    // You can add email sending logic here
    // Example with fetch to a third-party service:
    /*
    const emailResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: process.env.MARK_EMAIL || 'mark.noun@providentestate.com' }],
            subject: `New Lead: ${name}`,
          },
        ],
        from: { email: process.env.FROM_EMAIL || 'noreply@marknoun.ae' },
        content: [
          {
            type: 'text/plain',
            value: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
            `,
          },
        ],
      }),
    });

    if (!emailResponse.ok) {
      throw new Error('Failed to send email');
    }
    */

    return NextResponse.json(
      {
        success: true,
        message: 'Lead submitted successfully',
        data: { name, email },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
