import '@/styles/globals.css'
import Head from 'next/head'

import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
            <Head>
        <title>Веб-приложение службы доставки еды</title>
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
