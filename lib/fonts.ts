import { Inter_Tight } from '@next/font/google'
import localFont from '@next/font/local'

export const inter = Inter_Tight({
  weight: ['400'],
  subsets: ['latin'],
  fallback: ['sans-serif']
})

export const neueMachina = localFont({
  src: [
    {
      path: '../public/fonts/neue-machina/NeueMachina-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/neue-machina/NeueMachina-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ]
})
