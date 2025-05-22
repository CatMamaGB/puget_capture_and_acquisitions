import { notifyIndexNow } from '@/utils/indexNow';

export async function GET() {
  try {
    await notifyIndexNow('https://pugetca.com/services/contract-management');
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
} 