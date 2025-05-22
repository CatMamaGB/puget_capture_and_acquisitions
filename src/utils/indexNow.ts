import { indexNow } from 'indexnow';

export const notifyIndexNow = async (url: string) => {
  const host = new URL(process.env.NEXT_PUBLIC_SITE_URL as string).host;
  const key = 'e2c4751839a6481dbee6b02a93de0147';
  const keyLocation = `${process.env.NEXT_PUBLIC_SITE_URL}/e2c4751839a6481dbee6b02a93de0147.txt`;

  try {
    await indexNow(key, keyLocation, host, url);  // Changed parameter order to match API
    console.log(`✅ IndexNow successfully notified for URL: ${url}`);
  } catch (error) {
    console.error('❌ Error notifying IndexNow:', error);
  }
};
