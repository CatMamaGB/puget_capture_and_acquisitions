<Head>
  {/* Google Analytics */}
  <script
    async
    src={`https://www.googletagmanager.com/gtag/js?id=G-FSFBG0LJPH`}
  />
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-FSFBG0LJPH', {
          page_path: window.location.pathname,
        });
      `,
    }}
  />
</Head> 