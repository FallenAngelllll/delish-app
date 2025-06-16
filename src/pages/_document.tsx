import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ru'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='description' content='Описание страницы для поисковиков и соцсетей' />
          {/* можно добавить favicon, open graph и пр. */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
