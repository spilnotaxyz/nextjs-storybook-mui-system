import { CacheProvider, EmotionCache } from '@emotion/react'
import { MDXProvider } from '@mdx-js/react'
import { Container, ThemeProvider, useTheme } from '@mui/system'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { HTMLProps, PropsWithChildren } from 'react'

import { createEmotionCache, inter, theme } from '~lib'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const ComponentWrapper = ({ children }: PropsWithChildren) => {
  const theme = useTheme()
  return (
    <>
      {/* @ts-ignore */}
      <style global jsx>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          background: ${theme.palette.background.default};
          font-family: 'Inter Tight', sans-serif;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        hr {
          margin-block-start: 0;
          margin-block-end: 0;
          margin-inline-start: 0;
          margin-inline-end: 0;
          padding-block-start: 0;
          padding-block-end: 0;
          padding-inline-start: 0;
          padding-inline-end: 0;
        }
      `}</style>
      {children}
    </>
  )
}

/**
 * These are overrides for the default components used by MDX.
 */
const components = {
  h1: (props: HTMLProps<HTMLHeadingElement>) => <h1 {...props} />,
  h2: (props: HTMLProps<HTMLHeadingElement>) => <h2 {...props} />,
  p: (props: HTMLProps<HTMLParagraphElement>) => <p {...props} />,
  pre: (props: HTMLProps<HTMLPreElement>) => <pre {...props} />,
  a: (props: HTMLProps<HTMLAnchorElement>) => <a {...props} />,
  li: (props: HTMLProps<HTMLLIElement>) => <li {...props} />
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Template Website</title>
        <meta name="og:site_name" content="Template" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://template.what" />
        <meta property="og:title" content="Template Website" />
        <meta property="og:image" content="/meta.png" />
        <meta property="og:description" content="Template Description..." />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@h0tw4t3r" />
        <meta name="twitter:site" content="@who" />
      </Head>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <GoogleAnalytics trackPageViews />
          <MDXProvider components={components}>
            <ComponentWrapper>
              <Container className={inter.className} maxWidth="xl">
                <Component {...pageProps} />
              </Container>
            </ComponentWrapper>
          </MDXProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}
