import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
