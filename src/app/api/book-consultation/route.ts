import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, guests, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // First, get the user's scheduling link
    const scheduleResponse = await axios.get(
      'https://api.calendly.com/scheduling_links',
      {
        headers: {
          Authorization: `Bearer ${process.env.CALENDLY_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Return the scheduling URL to the client
    return NextResponse.json({
      success: true,
      schedulingUrl: scheduleResponse.data.resource.booking_url,
      message: 'Please proceed to schedule your consultation',
    });

  } catch (error) {
    console.error('Calendly API error:', error);
    return NextResponse.json(
      { error: 'Failed to initialize scheduling' },
      { status: 500 }
    );
  }
} 