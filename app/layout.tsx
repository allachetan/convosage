import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Convosage',
  description: 'Embed personalized contact cards to your website.',
  icons: "/images/favicon.ico"
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1.
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
