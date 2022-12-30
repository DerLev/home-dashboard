import type { AppProps } from 'next/app'
import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import GlobalStyles from '@styles/GlobalStyles'
import tw from 'twin.macro'
import Head from 'next/head'
import Footer from '@components/Footer'
import getConfig from 'next/config'

interface PublicRuntime {
  publicRuntimeConfig: {
    footer?: string
  }
}

const App = ({ Component, pageProps }: AppProps) => {
  const { publicRuntimeConfig: config }: PublicRuntime = getConfig()

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>Home Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyles />
      <div css={tw`flex flex-col min-h-screen py-2 px-4`}>
        <main css={tw`grow`}>
          <Component {...pageProps} />
        </main>
        {
          config.footer !== 'false' &&
          <Footer />
        }
      </div>
    </CacheProvider>
  )
}

export default App
