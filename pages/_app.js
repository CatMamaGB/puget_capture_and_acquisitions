import { GoogleAnalytics } from '@/components/GoogleAnalytics'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp 