import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Convosage',
  description: 'Embed personalized contact cards to your website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script id="csinjector" src="/injectcard.js" data-zindex="999" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
