import { AppProps } from 'next/app'
import ApplyGlobalContext from '../client/utils/ApplyGlobalContext'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApplyGlobalContext {...pageProps}>
      <Component />
    </ApplyGlobalContext>
  )
}

export default MyApp
