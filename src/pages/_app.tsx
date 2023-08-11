import type { AppProps } from 'next/app'
import { CartProvider } from 'use-shopping-cart'
import { globalStyles } from '@/styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={String(process.env.STRIPE_PUBLIC_KEY)}
      currency="BRL"
      shouldPersist={true}
    >
      <Component {...pageProps} />
    </CartProvider>
  )
}
