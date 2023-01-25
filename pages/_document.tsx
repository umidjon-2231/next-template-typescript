import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <title>Test</title>
            <meta name="description" content="Web site created by Umidjon"/>
            <meta name="theme-color" content={"#fff"}/>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="apple-touch-icon" href="/favicon.ico"/>
            <link rel="manifest" href="/manifest.json"/>
            <meta name="color-scheme" content={"light"}/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
