'use client'

import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Selected Work' },
  { href: '/art', label: 'Art' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

function MailIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4 rounded-[1.35rem] border border-white/14 bg-[rgba(10,12,20,0.96)] px-4 py-3 shadow-[0_24px_70px_rgba(8,10,18,0.3)] backdrop-blur-2xl sm:px-5">
          <Link href="/" className="flex min-w-0 items-center gap-3 transition hover:opacity-95">
            <div className="min-w-0">
              <p className="truncate font-[family-name:var(--font-display)] text-[0.88rem] uppercase tracking-[0.22em] text-white">
                Alex Turbyfield
              </p>
              <p className="truncate text-[0.64rem] font-medium uppercase tracking-[0.18em] text-[#f0c468]">
                Technical Artist
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-white/80 transition hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="mailto:aturbyfield@gmail.com"
              aria-label="Email Alex Turbyfield"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/80 transition hover:border-white/22 hover:bg-white/[0.1] hover:text-white"
            >
              <MailIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/alex-turbyfield-662b822b/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Alex Turbyfield on LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] transition hover:border-white/22 hover:bg-white/[0.1]"
            >
              <Image
                src="/images/linkedin.png"
                alt=""
                width={18}
                height={18}
                className="opacity-85"
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
