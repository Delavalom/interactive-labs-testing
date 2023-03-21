import '../styles/globals.css'
import { api } from '../utils/trpc'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


