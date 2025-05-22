import { NextRequest } from 'next/server';
import { notifyIndexNow } from '@/utils/indexNow';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return Response.json({ error: 'Missing URL' }, { status: 400 });
  }

  try {
    await notifyIndexNow(url);
    return Response.json({ message: `IndexNow pinged for ${url}` });
  } catch (error) {
    return Response.json(
      { error: 'Ping failed', detail: error instanceof Error ? error.message : String(error) }, 
      { status: 500 }
    );
  }
} 