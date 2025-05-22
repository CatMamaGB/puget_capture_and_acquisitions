import { notifyIndexNow } from '@/utils/indexNow';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  try {
    await notifyIndexNow(url);
    return NextResponse.json({ message: `IndexNow pinged for ${url}` });
  } catch (error) {
    console.error('IndexNow error:', error);
    return NextResponse.json({ error: 'Failed to ping IndexNow' }, { status: 500 });
  }
} 