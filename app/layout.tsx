import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { IBM_Plex_Sans, Inter } from 'next/font/google'

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
  title: 'Alex Turbyfield — Technical Artist',
  description:
    'Technical Artist specializing in real-time shaders, tools, and procedural systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/art', label: 'Art' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSans.variable} bg-[#121212] text-gray-100 antialiased`}
      >
        <div className="page-grid pointer-events-none fixed inset-0 opacity-60" />
        <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(135deg,rgba(255,154,76,0.14)_0%,transparent_28%,rgba(145,104,255,0.14)_58%,transparent_82%),linear-gradient(24deg,transparent_12%,rgba(255,154,76,0.08)_38%,transparent_62%),linear-gradient(180deg,rgba(18,18,18,0.1),rgba(18,18,18,0.88))]" />

        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#121212]/88 backdrop-blur-2xl">
          <nav className="mx-auto max-w-6xl px-4 py-3 sm:px-6 sm:py-4">
            <div className="flex items-center justify-between gap-3 rounded-[1.1rem] border border-white/12 bg-[#1a1a1a]/88 px-3 py-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.32)] sm:gap-4 sm:rounded-[1.25rem] sm:px-4 sm:py-3">
              <Link
                href="/"
                className="font-[family-name:var(--font-display)] text-[0.78rem] uppercase tracking-[0.22em] text-white/88 transition hover:text-white sm:text-sm sm:tracking-[0.3em]"
              >
                Alex Turbyfield
              </Link>

              <div className="flex flex-wrap items-center justify-end gap-1.5 sm:gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg border border-transparent px-2.5 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.08em] text-slate-300 transition hover:border-orange-300/20 hover:bg-gradient-to-r hover:from-orange-300/[0.08] hover:to-violet-300/[0.08] hover:text-white sm:rounded-xl sm:px-4 sm:py-2 sm:text-sm sm:tracking-[0.14em]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>
      </body>
    </html>
  )
}
