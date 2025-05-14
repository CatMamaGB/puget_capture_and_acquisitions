import { NextResponse } from 'next/server';

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

    // Return the direct Calendly URL
    return NextResponse.json({
      schedulingUrl: 'https://calendly.com/bpirro-pugetca'
    });
  } catch (error) {
    console.error('Booking consultation error:', error);
    return NextResponse.json(
      { error: 'Failed to process consultation request' },
      { status: 500 }
    );
  }
} 