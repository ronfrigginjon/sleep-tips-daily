import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
	    <meta name="takeads-platform-verification" content="3abead6b-064d-4bbb-a9d9-7c550bd140a2"/>
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="robots" content="index,follow" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}