import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

type StatItem = {
  title: string
  detail: string
  icon: 'users' | 'globe' | 'code' | 'mountain' | 'wrench'
}

type CapabilityItem = {
  label: string
  icon: 'cube' | 'sun' | 'nodes' | 'wrench' | 'render' | 'gauge' | 'code'
}

type WorkItem = {
  title: string
  subtitle: string
  href: string
  image: string
}

type LogoItem = {
  name: string
  image: string
  width: number
  height: number
}

const stats: StatItem[] = [
  {
    title: 'Global IP',
    detail: 'Brand-safe execution',
    icon: 'users',
  },
  {
    title: 'Global',
    detail: 'Representative environments',
    icon: 'globe',
  },
  {
    title: 'Technical Leadership',
    detail: 'Guiding cross-team systems',
    icon: 'users',
  },
  {
    title: 'Graphics Solutions',
    detail: 'For complex visuals',
    icon: 'mountain',
  },
]

const capabilities: CapabilityItem[] = [
  { label: 'Technical Art', icon: 'cube' },
  { label: 'Shaders', icon: 'sun' },
  { label: 'Procedural Systems', icon: 'nodes' },
  { label: 'Tools & Pipelines', icon: 'code' },
  { label: 'Rendering', icon: 'render' },
  { label: 'Optimization', icon: 'gauge' },
]

const selectedWork: WorkItem[] = [
  {
    title: 'Pokemon GO Biomes',
    subtitle: 'Feature lead · Technical art',
    href: '/projects/pogo-encounters',
    image: '/images/projects/biomes/biomes-day.png',
  },
  {
    title: 'URP Conversion',
    subtitle: 'Graphics migration',
    href: '/projects/pogo-urp',
    image: '/images/projects/urp-header.jpg',
  },
  {
    title: 'World Championships Arena',
    subtitle: 'Event battle environment',
    href: '/projects/pokemon-worlds-2025-battle-arena',
    image: '/images/projects/pokemon-worlds-arena-stage.avif',
  },
  {
    title: 'Voiceball',
    subtitle: 'Art, design, technical art',
    href: '/projects/voiceball',
    image: '/images/main/VoiceballPromo.jpg',
  },
]

const logoItems: LogoItem[] = [
  {
    name: 'Scopely',
    image: '/images/logos/scopely.webp',
    width: 180,
    height: 56,
  },
  {
    name: 'Niantic',
    image: '/images/logos/niantic.svg',
    width: 190,
    height: 56,
  },
  {
    name: 'SciPlay',
    image: '/images/logos/sciplay.png?v=2',
    width: 180,
    height: 56,
  },
  {
    name: 'University of Georgia',
    image: '/images/logos/uga.png',
    width: 160,
    height: 74,
  },
]

function Icon({
  kind,
  className = 'h-5 w-5',
}: {
  kind:
    | 'users'
    | 'globe'
    | 'code'
    | 'mountain'
    | 'cube'
    | 'sun'
    | 'nodes'
    | 'wrench'
    | 'render'
    | 'gauge'
    | 'play'
    | 'arrow'
    | 'mail'
    | 'spark'
    | 'briefcase'
  className?: string
}) {
  const stroke = 'currentColor'

  switch (kind) {
    case 'users':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" className={className}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
          <circle cx="9.5" cy="7" r="3" />
          <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M14 4.13a4 4 0 0 1 0 5.74" />
        </svg>
      )
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a15 15 0 0 1 0 18" />
          <path d="M12 3a15 15 0 0 0 0 18" />
        </svg>
      )
    case 'code':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" className={className}>
          <path d="m8 16-4-4 4-4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m13.5 4-3 16" />
        </svg>
      )
    case 'mountain':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" className={className}>
          <path d="M3 20 10 8l3 5 2-3 6 10Z" />
          <path d="m10 8 2 2 2-3" />
        </svg>
      )
    case 'cube':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" className={className}>
          <path d="m12 2 8 4.5v9L12 20l-8-4.5v-9Z" />
          <path d="M12 20v-9.5" />
          <path d="M20 6.5 12 11 4 6.5" />
        </svg>
      )
    case 'sun':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" className={className}>
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
        </svg>
      )
    case 'nodes':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" className={className}>
          <circle cx="6" cy="12" r="2.2" />
          <circle cx="18" cy="6" r="2.2" />
          <circle cx="18" cy="18" r="2.2" />
          <path d="M8 11l7.5-4" />
          <path d="M8 13l7.5 4" />
        </svg>
      )
    case 'wrench':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" className={className}>
          <path d="M14.7 6.3a4.1 4.1 0 0 0-5 5L3.6 17.4a2.1 2.1 0 0 0 3 3l6.1-6.1a4.1 4.1 0 0 0 5-5l-2.8 2.8-3-3Z" />
          <path d="m5 19 1.2-1.2" />
        </svg>
      )
    case 'render':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" className={className}>
          <path d="m4 18 6-12 10 6-6 6Z" />
          <path d="m10 6 4 12" />
        </svg>
      )
    case 'gauge':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" className={className}>
          <path d="M4.5 16a7.5 7.5 0 1 1 15 0" />
          <path d="M12 12 16.5 9" />
          <path d="M12 12v4" />
        </svg>
      )
    case 'play':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="m10 8 6 4-6 4Z" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'arrow':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" className={className}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      )
    case 'mail':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" className={className}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      )
    case 'briefcase':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" className={className}>
          <rect x="3" y="7" width="18" height="12" rx="2" />
          <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
          <path d="M3 12h18" />
        </svg>
      )
    case 'spark':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7Z" />
        </svg>
      )
  }
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#f0c468]">
      {children}
    </p>
  )
}

export default function Home() {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#06090f] shadow-[0_32px_120px_rgba(0,0,0,0.34)]">
      <div className="relative">
        <div className="relative min-h-[46rem] overflow-hidden border-b border-white/8">
          <video
            className="absolute inset-0 h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/main/home-hero-biomes-composite-v7.png"
            aria-label="Biome transition reel"
          >
            <source src="/videos/main-page-video.mp4" type="video/mp4" />
            <source src="/videos/main-page-video.mov" type="video/quicktime" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,13,0.88)_0%,rgba(5,8,13,0.62)_34%,rgba(5,8,13,0.3)_58%,rgba(5,8,13,0.24)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,18,0.12)_0%,rgba(8,12,18,0.08)_34%,rgba(8,12,18,0.62)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#06090f] to-transparent" />

          <div className="relative flex min-h-[46rem] items-start px-8 pb-36 pt-16 sm:px-10 lg:px-14 lg:pt-20">
            <div className="max-w-[34rem] space-y-7">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <h1 className="hero-title">
                    <span className="hero-title-line hero-title-line-1">Building worlds</span>
                    <span className="hero-title-line hero-title-line-2">that inspire</span>
                    <span className="hero-title-line hero-title-line-3">exploration.</span>
                  </h1>
                </div>
                <p className="max-w-[27rem] text-lg leading-9 text-white/84">
                  Technical art systems that bring large-scale, real-world
                  environments to life through rendering, tools, and
                  procedural design.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-8 bottom-8 sm:inset-x-10 lg:inset-x-14">
            <div className="grid gap-3 rounded-[1.4rem] border border-white/12 bg-[rgba(17,20,26,0.72)] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl md:grid-cols-4 md:gap-0 md:p-0">
              {stats.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-center gap-4 px-5 py-4 ${
                    index < stats.length - 1 ? 'md:border-r md:border-white/10' : ''
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f0c468]/30 bg-[#f0c468]/10 text-[#f0c468]">
                    <Icon kind={item.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-white">{item.title}</p>
                    <p className="text-sm text-white/62">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-10 px-8 py-10 sm:px-10 lg:px-14 lg:py-12">
          <div className="space-y-5 border-b border-white/8 pb-8">
            <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[rgba(255,255,255,0.04)]">
              <div className="grid gap-px bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
                {logoItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex min-h-[7.5rem] items-center justify-center bg-[rgba(255,255,255,0.03)] px-5 py-5"
                  >
                    <div className="flex w-full items-center justify-center rounded-[0.95rem] bg-[rgba(255,255,255,0.95)] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={item.width}
                        height={item.height}
                        className="max-h-[4.2rem] w-auto object-contain"
                        unoptimized={item.image.endsWith('.svg') || item.image.includes('sciplay.png')}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-8 border-b border-white/8 pb-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:items-start">
            <div className="space-y-5">
              <SectionLabel>Featured Case Study</SectionLabel>
              <div className="space-y-4">
                <h2 className="font-[family-name:var(--font-display)] text-4xl leading-none text-white">
                  Biomes
                </h2>
                <p className="max-w-md text-xl leading-8 text-white/88">
                  Building the evolution of Pokemon GO&apos;s real-world encounter environments.
                </p>
                <p className="max-w-md text-base leading-8 text-white/66">
                  I led the technical development of a scalable biome system
                  that dynamically places props, moods, and effects across the
                  globe using data-driven rules and artist-friendly tooling.
                </p>
              </div>

              <Link
                href="/projects/pogo-encounters"
                className="inline-flex items-center gap-2 rounded-[1rem] border border-[#f0c468]/42 bg-transparent px-5 py-3 text-sm font-medium text-white transition hover:border-[#f0c468]/72 hover:bg-white/4"
              >
                <span>Explore Biomes</span>
                <Icon kind="arrow" className="h-4 w-4 text-[#f0c468]" />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-white/12 bg-[rgba(18,22,28,0.86)] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
              <div className="grid gap-px bg-white/8 lg:grid-cols-[minmax(0,1.2fr)_220px]">
                <div className="relative grid min-h-[18rem] grid-cols-3 gap-px bg-white/8">
                  {[
                    '/images/projects/biomes/biomes-grasslands.png',
                    '/images/projects/biomes/biomes-evening.png',
                    '/images/projects/biomes/biomes-day.png',
                  ].map((src) => (
                    <div key={src} className="relative min-h-[18rem] overflow-hidden bg-black/30">
                      <Image
                        src={src}
                        alt="Biome study"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}

                  <div className="absolute bottom-4 left-4 rounded-[1rem] border border-white/12 bg-[rgba(10,14,18,0.68)] px-4 py-3 text-white shadow-[0_12px_40px_rgba(0,0,0,0.24)] backdrop-blur-md">
                    <p className="text-sm font-medium">One system.</p>
                    <p className="text-sm text-white/72">Many habitats.</p>
                  </div>
                </div>

                <div className="space-y-4 p-5">
                  {[
                    'Procedural placement',
                    'Data-driven rules',
                    'Performance focused',
                    'Artist-friendly tools',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-white/84">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#f0c468]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 border-b border-white/8 pb-8">
            <div className="grid gap-4 lg:grid-cols-[140px_minmax(0,1fr)] lg:items-center">
              <SectionLabel>What I Do</SectionLabel>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
                {capabilities.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/82"
                  >
                    <span className="text-[#f0c468]">
                      <Icon kind={item.icon} className="h-[18px] w-[18px]" />
                    </span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5 border-b border-white/8 pb-10">
            <div className="flex items-center justify-between gap-4">
              <SectionLabel>Selected Work</SectionLabel>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-[#f0c468] transition hover:text-[#f5d58f]"
              >
                <span>View all projects</span>
                <Icon kind="arrow" className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 xl:grid-cols-4">
              {selectedWork.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group overflow-hidden rounded-[1.15rem] border border-white/10 bg-[rgba(255,255,255,0.02)] transition hover:-translate-y-1 hover:border-white/18"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-black/4" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{item.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
