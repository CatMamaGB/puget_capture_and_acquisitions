import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Log for debugging
    console.log('Attempting to send email with config:', {
      from: process.env.EMAIL_USER,
      auth: {
        user: process.env.EMAIL_USER,
        // password hidden for security
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    try {
      // Verify connection
      await transporter.verify();
      console.log('SMTP connection verified');
      
      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log('Message sent:', info.messageId);
      
      return NextResponse.json({ 
        success: true,
        message: 'Email sent successfully'
      });
    } catch (emailError) {
      console.error('Email error:', emailError);
      throw emailError;
    }

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send message',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 