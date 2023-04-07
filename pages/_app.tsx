import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { App } from 'konsta/react'
export default function TestApp({ Component, pageProps }: AppProps) {
  return (
    <App theme='material' safeAreas dark>
      <Component {...pageProps} />
    </App>
  )
}
