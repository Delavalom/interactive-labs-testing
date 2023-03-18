import '../styles/globals.css'
import { api } from '../utils/trpc'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default api.withTRPC(App)

