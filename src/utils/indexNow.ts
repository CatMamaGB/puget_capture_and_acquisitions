export async function notifyIndexNow(url: string) {
  // Only skip during build, allow testing in development
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    console.log('Skipping IndexNow notification during build:', url);
    return { success: true };
  }

  const key = 'e2c4751839a6481dbee6b02a93de0147';
  const keyLocation = `https://pugetca.com/${key}.txt`;

  const body = {
    host: 'pugetca.com',
    key,
    keyLocation,
    urlList: [url],
  };

  console.log('Sending IndexNow notification for:', url);

  const res = await fetch('https://www.bing.com/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    console.error('IndexNow error:', await res.text());
    throw new Error(`IndexNow failed: ${res.status} ${res.statusText}`);
  }

  console.log('IndexNow notification successful');
  return { success: true };
}
