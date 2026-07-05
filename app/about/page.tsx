import Image from 'next/image'
import Link from 'next/link'

const strengths = [
  'Technical art for real-time products',
  'Shaders, VFX, rendering, and runtime visuals',
  'Artist-friendly tools, pipelines, and workflows',
  'Interactive systems, UI polish, and spatial thinking',
]

const timeline = [
  {
    years: '2021-Present',
    title: 'Technical Artist, Niantic',
    detail:
      'Leading systems and feature work on Pokemon GO, including biome-driven encounter environments, shaders, VFX, tooling, and client-side feature development.',
  },
  {
    years: '2019-2021',
    title: 'Technical Artist, SciPlay',
    detail:
      'Supported Bingo Showdown across feature work, art support, UI, optimization, and cross-discipline implementation for shipping content.',
  },
  {
    years: '2014-2019',
    title: 'Digital Media Professional Principal, University of Georgia',
    detail:
      'Led technical development on educational interactive projects, guiding framework work, art production, and team collaboration on SYSTEMS: Virtual Vet.',
  },
  {
    years: '2013-2014',
    title: 'Technical Artist, Cogent Education',
    detail:
      'Created interactive science learning software across art, animation, UI, and gameplay-facing implementation for desktop and mobile platforms.',
  },
]

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-orange-300/10 bg-[#181818]/92 px-6 py-8 shadow-[0_36px_100px_rgba(0,0,0,0.34)] sm:px-8 md:px-10 lg:px-12 lg:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,154,76,0.14)_0%,transparent_34%,rgba(145,104,255,0.12)_70%,transparent_100%),linear-gradient(24deg,transparent_8%,rgba(255,154,76,0.07)_42%,transparent_68%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(140,215,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(140,215,255,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="relative space-y-8 md:space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-orange-300/20 bg-orange-300/[0.07] px-4 py-2 text-[0.68rem] uppercase tracking-[0.34em] text-orange-100/80">
              <span className="h-2 w-2 rounded-full bg-orange-300 shadow-[0_0_12px_rgba(253,186,116,0.75)]" />
              About
            </div>

            <div className="space-y-4">
              <p className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.34em] text-orange-100/58">
                Technical Art with Systems Range
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl uppercase leading-[0.95] text-white sm:text-5xl lg:text-6xl">
                Making art and
                <br />
                systems work
                <br />
                better together
              </h1>
            </div>

            <div className="max-w-3xl space-y-5 text-base leading-8 text-slate-300/78 sm:text-lg">
              <p>
                My background sits at the intersection of art, technical
                problem solving, and real-time development. I like the kind of
                work where a team has a strong visual target, real production
                constraints, and just enough ambiguity to make the solution
                interesting.
              </p>
              <p>
                Over the years I&apos;ve worked across live games, educational
                software, tools, shaders, VFX, UI, pipelines, and feature
                implementation. I still think of myself first as a technical
                artist, but a lot of the underlying work translates naturally
                to design technologist, graphics engineering, and digital twin
                style environments where visuals, data, and interaction all
                need to cooperate.
              </p>
              <p>
                A lot of what I do is translation: turning ideas into systems,
                turning data into visuals, and helping teams move from rough
                intent to something stable, performant, and usable in
                production. I like helping teams stay focused, feel excited
                about what they&apos;re building, and keep good momentum while
                the work takes shape.
              </p>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-violet-300/12 bg-[#1a1a1a]/88 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-white/10">
                <Image
                  src="/images/main/murk.jpg"
                  alt="Alex Turbyfield artwork"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 320px, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,154,76,0.12)_0%,transparent_42%,rgba(145,104,255,0.16)_100%)]" />
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-violet-300/12 bg-[#1a1a1a]/88 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-violet-100/48">
                Capability Set
              </p>
              <ul className="mt-5 space-y-3">
                {strengths.map((strength) => (
                  <li
                    key={strength}
                    className="rounded-xl border border-white/8 bg-black/20 px-4 py-3 text-sm leading-6 text-slate-200/84"
                  >
                    {strength}
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-xl border border-orange-300/12 bg-orange-300/[0.06] p-4 text-sm leading-7 text-slate-200/74">
                MFA in Dramatic Media (Computer Animation), University of Georgia
              </div>
            </div>
          </aside>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <article className="rounded-[1.6rem] border border-white/12 bg-[#1a1a1a]/88 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-8">
            <div className="mb-5 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-orange-300/60 to-transparent" />
              <h2 className="font-[family-name:var(--font-display)] text-2xl uppercase tracking-[0.14em] text-white">
                How I Work
              </h2>
            </div>

            <div className="space-y-4 text-[1.02rem] leading-8 text-slate-300/78">
              <p>
                I like building spaces where artists and engineers can work
                toward the same result without either side losing clarity. That
                usually means dependable tools, production-aware decisions, and
                enough technical depth to solve the real problem instead of
                adding another workaround.
              </p>
              <p>
                I&apos;m especially drawn to systems-heavy work: rendering
                features, procedural environments, pipelines, simulation-minded
                interfaces, and all the small decisions that make a production
                team more capable over time.
              </p>
              <p>
                Whether I&apos;m writing feature logic, optimizing content,
                building shaders, or helping untangle workflow issues, I try to
                make the process feel solid, collaborative, and steady while
                the work is getting done, so teams can stay focused and do
                their best work.
              </p>
            </div>
          </article>

          <article className="rounded-[1.6rem] border border-white/12 bg-[#202020]/92 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-8">
            <div className="mb-5 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-violet-300/60 to-transparent" />
              <h2 className="font-[family-name:var(--font-display)] text-2xl uppercase tracking-[0.14em] text-white">
                Highlights
              </h2>
            </div>

            <div className="space-y-4 text-[1.02rem] leading-8 text-slate-300/78">
              <p>
                I&apos;ve led technical work on Pokemon GO features including
                biome-based encounter environments and contributed across
                shaders, VFX, addressables, feature development, and
                brand-conscious implementation inside a large live game.
              </p>
              <p>
                Earlier in my career, I worked on Unity rewrites, educational
                games, interactive science software, and installation-like
                projects where experience, systems thinking, and presentation
                all mattered at the same time.
              </p>
            </div>
          </article>
        </div>

        <article className="rounded-[1.6rem] border border-white/12 bg-[#1a1a1a]/88 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-8">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-orange-300/60 to-transparent" />
            <h2 className="font-[family-name:var(--font-display)] text-2xl uppercase tracking-[0.14em] text-white">
              Timeline
            </h2>
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            {timeline.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.25rem] border border-violet-300/10 bg-black/20 p-5"
              >
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-violet-100/42">
                  {item.years}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg uppercase leading-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300/78">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </article>

        <div className="rounded-[1.6rem] border border-white/12 bg-gradient-to-r from-orange-300/[0.1] via-white/[0.03] to-violet-300/[0.1] p-6 text-center shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-8">
          <p className="mx-auto max-w-3xl font-[family-name:var(--font-display)] text-3xl uppercase leading-tight text-white sm:text-4xl">
            Thoughtful visuals, reliable systems,
            <br />
            and follow-through that holds up in production.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/projects"
              className="rounded-xl border border-white/12 bg-white/[0.05] px-5 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white/82 transition hover:bg-white/10 hover:text-white"
            >
              See Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-orange-300/25 bg-orange-300/[0.1] px-5 py-3 text-sm font-medium uppercase tracking-[0.18em] text-orange-50 transition hover:border-orange-200/40 hover:bg-orange-300/[0.16]"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
