import Image from 'next/image'
import Link from 'next/link'

const statCards = [
  { label: 'Focus', value: 'Technical art, real-time graphics, tools, and spatial systems' },
  { label: 'Built For', value: 'Games, AR, educational software, and simulation-minded experiences' },
  { label: 'Approach', value: 'Visual intent backed by production-ready engineering and a little curiosity' },
]

export default function Home() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-orange-300/10 bg-[#181818]/92 px-6 py-8 shadow-[0_36px_100px_rgba(0,0,0,0.34)] sm:px-8 md:px-10 lg:px-12 lg:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,154,76,0.14)_0%,transparent_34%,rgba(145,104,255,0.12)_70%,transparent_100%),linear-gradient(24deg,transparent_8%,rgba(255,154,76,0.07)_42%,transparent_68%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(140,215,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(140,215,255,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-center">
        <div className="space-y-8">
          <div className="flex flex-wrap gap-2 lg:flex-nowrap">
            <div className="inline-flex items-center gap-3 rounded-full border border-orange-300/20 bg-orange-300/[0.07] px-3 py-2 text-[0.62rem] uppercase tracking-[0.3em] text-orange-100/80">
              <span className="h-2 w-2 rounded-full bg-orange-300 shadow-[0_0_12px_rgba(253,186,116,0.75)]" />
              Technical Artist
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-violet-300/20 bg-violet-300/[0.07] px-3 py-2 text-[0.62rem] uppercase tracking-[0.3em] text-violet-100/78">
              <span className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.7)]" />
              Design Technologist
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-200/18 bg-cyan-200/[0.06] px-3 py-2 text-[0.62rem] uppercase tracking-[0.3em] text-cyan-100/78">
              <span className="h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(165,243,252,0.62)]" />
              Graphics Engineering
            </div>
          </div>

          <div className="space-y-5">
            <p className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.34em] text-orange-100/60">
              Real-time Graphics / Tools / Interactive Systems
            </p>

            <p className="font-[family-name:var(--font-display)] text-[2.8rem] uppercase leading-[0.95] tracking-[0.1em] text-white/88 sm:text-[3.8rem] lg:text-[4.5rem]">
              Alex Turbyfield
            </p>

            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I build rendering features, artist-facing tools, and procedural
              systems for teams working in real-time media. Most of my work has
              lived in games, but the throughline is broader: turning visual
              goals, data, and interaction needs into stable runtime behavior
              that feels intentional on screen and usable in production.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-xl border border-orange-300/25 bg-orange-300/[0.1] px-5 py-3 text-sm font-medium uppercase tracking-[0.18em] text-orange-50 transition hover:border-orange-200/40 hover:bg-orange-300/[0.16]"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-200 transition hover:border-violet-300/20 hover:bg-white/[0.08] hover:text-white"
            >
              About Me
            </Link>
          </div>

          <div className="grid gap-3 pt-2 md:grid-cols-3">
            {statCards.map((card) => (
              <div
                key={card.label}
                className="rounded-[1.2rem] border border-violet-300/10 bg-[#1d1d1d]/85 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-violet-100/48">
                  {card.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-200/88">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem]">
          <div className="pointer-events-none absolute -left-6 top-10 h-48 w-48 rounded-full bg-orange-400/12 blur-3xl" />
          <div className="pointer-events-none absolute -right-2 bottom-8 h-40 w-40 rounded-full bg-violet-400/12 blur-3xl" />

          <div className="relative overflow-hidden rounded-[1.8rem] border border-violet-300/12 bg-[#1a1a1a]/92 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.38)]">
            <div className="mb-4 flex items-center justify-between rounded-xl border border-white/6 bg-black/20 px-4 py-3">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-violet-100/45">
                  Current Focus
                </p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.18em] text-white/88">
                  Systems / Rendering / Spatial Thinking
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/8 bg-black/25">
              <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0)_60%,rgba(4,12,18,0.8)_100%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_34%,transparent_70%,rgba(255,255,255,0.02))]" />
              <div className="pointer-events-none absolute inset-0 z-10 opacity-40 [background-image:linear-gradient(rgba(145,220,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(145,220,255,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/main/veins.png"
                  alt="Abstract organic veins artwork"
                  fill
                  priority
                  className="object-cover object-[24%_50%] saturate-[1.08] contrast-[1.02]"
                />
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-orange-100/45">
                  Specialty
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200/82">
                  Translating visual goals into scalable runtime behavior, tools, and interactive environments.
                </p>
              </div>
              <div className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-violet-100/45">
                  Teams
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200/82">
                  Best where art, design, and engineering overlap, compare notes, and make something sharper together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
