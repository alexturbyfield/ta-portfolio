import './globals.css'
import type { Metadata } from 'next'
import { IBM_Plex_Sans, Inter } from 'next/font/google'
import SiteHeader from '@/components/SiteHeader'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Alex Turbyfield - Technical Artist',
  description:
    'Technical Artist specializing in real-time shaders, tools, and procedural systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSans.variable} antialiased`}
      >
        <div className="page-grid pointer-events-none fixed inset-0" />
        <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(180deg,rgba(255,250,233,0.08),transparent_20%,rgba(10,18,14,0.08)_100%)]" />

        <SiteHeader />

        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
