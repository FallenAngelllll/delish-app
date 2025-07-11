import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <link
          rel='preload'
          href='/fonts/Inter-VariableFont_opsz,wght.ttf'
          as='font'
          type='font/ttf'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/Roboto-VariableFont_wdth,wght.ttf'
          as='font'
          type='font/ttf'
          crossOrigin='anonymous'
        />
        <title>Веб-приложение службы доставки еды</title>
        <meta charSet='utf-8' />
        <meta name='description' content='Веб-приложение службы доставки еды' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
