import { notifyIndexNow } from '@/utils/indexNow';
import { NextResponse } from 'next/server';
import { parseStringPromise } from 'xml2js';

export async function GET() {
  try {
    // Fetch the sitemap
    const sitemapRes = await fetch('https://pugetca.com/sitemap-0.xml');
    const sitemapXml = await sitemapRes.text();
    
    // Parse the XML
    const sitemap = await parseStringPromise(sitemapXml);
    const urls = sitemap.urlset.url.map((entry: any) => entry.loc[0]);

    // Notify IndexNow for each URL
    const results = await Promise.all(
      urls.map(async (url: string) => {
        try {
          await notifyIndexNow(url);
          return { url, success: true };
        } catch (error) {
          return { url, success: false, error: String(error) };
        }
      })
    );

    return NextResponse.json({
      message: 'Completed IndexNow notifications',
      results
    });
  } catch (error) {
    console.error('Failed to process sitemap:', error);
    return NextResponse.json(
      { error: 'Failed to process sitemap' },
      { status: 500 }
    );
  }
} 