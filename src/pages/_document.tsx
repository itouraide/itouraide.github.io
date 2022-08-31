import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body className="font-inter antialiased bg-white text-gray-900 tracking-tight">
          <Main />
          <NextScript />
          <script src="/sidebar.js" type="text/javascript" defer />
        </body>
      </Html>
    )
  }
}

export default Document
