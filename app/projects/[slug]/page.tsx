import Image from 'next/image'
import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import { Oswald } from 'next/font/google'
import ProjectImageCarousel from '@/components/ProjectImageCarousel'
import ShaderPlayground from '@/components/ShaderPlayground'

// Oswald font for hero title only
const oswald = Oswald({ weight: '700', subsets: ['latin'], display: 'swap' })

const biomeLabels = [
  'Grassland',
  'Forest',
  'Beach',
  'River',
  'Lake',
  'Ocean',
  'City',
  'Mountain',
  'Seasonal',
  'Weather',
  'Holiday Events',
  'Halloween',
]

const biomeWaypoints = [
  {
    title: 'Any Location',
    body: 'A city block, a mountain edge, a riverbank, or open coastline could all produce their own spatial identity.',
  },
  {
    title: 'Persistent Worlds',
    body: 'Variation is seeded to place, so returning to the same location still feels familiar rather than arbitrary.',
  },
  {
    title: 'Season & Weather',
    body: 'Cherry blossoms, fog, holiday dressing, and weather shifts let the same biome keep evolving over time.',
  },
  {
    title: 'Built to Ship',
    body: 'The system was designed to feel rich at a glance while staying fast, readable, and scalable for a live game.',
  },
]

const worldsWaypoints = [
  {
    title: 'Grand Scale',
    body: 'The arena needed to feel broadcast-ready, not just battle-ready.',
  },
  {
    title: 'Reactive Systems',
    body: 'Barrier, lighting, and screen behavior all shifted with battle state to make the space feel alive.',
  },
  {
    title: 'Visual Pressure',
    body: 'Crowd motion, VFX, and camera beats helped sell the feeling of competition and ceremony.',
  },
  {
    title: 'Game Clarity',
    body: 'All of that spectacle still had to support readability, performance, and the battle itself.',
  },
]

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  const isBiomes = project.slug === 'pogo-encounters'
  const isWorlds = project.slug === 'pokemon-worlds-2025-battle-arena'
  const isShowcaseProject = isBiomes || isWorlds

  return (
    <div className="min-h-screen bg-[#121212] px-4 pb-10 text-white sm:px-6 sm:pb-12 md:px-8 md:pb-16">
      {project.heroImage && (
        <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 h-[360px] md:h-[460px]">
          {project.heroBackgroundBlur ? (
            <>
              <Image
                src={project.heroBackgroundImage ?? project.heroImage}
                alt={project.title}
                fill
                priority
                className="scale-[1.02] object-cover blur-md brightness-[0.62] saturate-[1.02]"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.12)_48%,rgba(0,0,0,0.32)_100%)]" />
              <div className="absolute inset-x-6 top-6 bottom-24 overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/12 shadow-[0_20px_60px_rgba(0,0,0,0.24)] md:inset-x-10 md:top-8 md:bottom-28">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  priority
                  className={`${project.heroImageContain ? 'object-contain' : 'object-cover'} p-4 md:p-6`}
                />
              </div>
            </>
          ) : (
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              style={project.heroImagePosition ? { objectPosition: project.heroImagePosition } : undefined}
              className={project.heroImageContain ? 'object-contain p-6' : 'object-cover'}
            />
          )}

          {!project.heroImageOnly && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,154,76,0.14)_0%,transparent_38%,rgba(145,104,255,0.14)_78%,transparent_100%)]" />

              <div className={`absolute bottom-0 w-full p-6 md:p-10 ${
                isBiomes
                  ? 'left-0 max-w-4xl text-left'
                  : isWorlds
                    ? 'left-0 max-w-4xl text-left'
                  : 'left-1/2 max-w-3xl -translate-x-1/2 text-center'
              }`}>
                {(isBiomes || isWorlds) && (
                  <div className="mb-5 flex flex-wrap gap-2">
                    {(isBiomes
                      ? ['Seeded to place', 'Season aware', 'Performance minded']
                      : ['Grand scale', 'Reactive VFX']
                    ).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/14 bg-black/35 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.22em] text-white/82 backdrop-blur-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
                {project.subtitle && (
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-orange-200/90">
                    {project.subtitle}
                  </p>
                )}
                <h1
                  className={`${oswald.className} text-4xl font-extrabold tracking-wide text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] md:text-5xl`}
                >
                  {project.title}
                </h1>
                {isBiomes && (
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
                    A procedural world layer built to make encounters feel local,
                    seasonal, and quietly alive.
                  </p>
                )}
                {isWorlds && (
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
                    A championship arena built to feel ceremonial, reactive, and
                    charged with competition.
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      )}

      <section className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,1fr)] lg:items-start">
        <div className="space-y-8">
          <div className={`rounded-[1.75rem] border p-8 shadow-[0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur-sm ${
            isBiomes
              ? 'border-emerald-300/18 bg-[linear-gradient(145deg,rgba(17,28,22,0.96),rgba(23,26,20,0.94)_48%,rgba(18,24,28,0.95))]'
              : isWorlds
                ? 'border-cyan-300/18 bg-[linear-gradient(145deg,rgba(18,23,31,0.96),rgba(24,21,32,0.94)_48%,rgba(20,25,36,0.95))]'
              : 'border-orange-300/16 bg-[#1c1c1c]/95'
          }`}>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-orange-100/58">
              {isBiomes ? 'World Premise' : isWorlds ? 'Arena Premise' : 'Project Overview'}
            </p>
            {project.description && (
              <p className="max-w-3xl text-lg leading-8 text-white/88 md:text-xl">
                {project.description}
              </p>
            )}
          </div>

          {project.videos && project.videos.length > 0 && isWorlds && (
            <div className="space-y-6">
              {project.videos.map((video) => (
                <article
                  key={video}
                  className="rounded-[1.75rem] border border-violet-300/16 bg-[#1c1c1c]/95 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur-sm sm:p-6"
                >
                  <div className="mb-4 flex items-center gap-4 px-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-violet-300/70 to-orange-300/20" />
                    <h2 className={`${oswald.className} text-xl uppercase tracking-[0.12em] text-white`}>
                      Video
                    </h2>
                  </div>
                  <div className="overflow-hidden rounded-[1.25rem] border border-white/12 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                    {video.includes('youtube.com') ? (
                      <iframe
                        className="aspect-video w-full"
                        src={video}
                        title={`${project.title} video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        className="aspect-video w-full bg-black object-contain"
                        src={video}
                        controls
                        playsInline
                        preload="metadata"
                      >
                        <track kind="captions" />
                      </video>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          {project.images && project.images.length > 0 && isBiomes && (
            <article className="rounded-[1.75rem] border border-emerald-300/18 bg-[linear-gradient(155deg,rgba(19,32,24,0.96),rgba(19,21,18,0.92)_56%,rgba(18,28,28,0.94))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur-sm sm:p-6">
              <div className="mb-4 flex items-center gap-4 px-2">
                <div className="h-px flex-1 bg-gradient-to-r from-emerald-300/70 via-lime-200/35 to-sky-300/20" />
                <h2 className={`${oswald.className} text-xl uppercase tracking-[0.12em] text-white`}>
                  Field Atlas
                </h2>
              </div>

              <ProjectImageCarousel
                images={project.images}
                projectTitle={project.title}
                variant="default"
              />
            </article>
          )}

          {isBiomes && (
            <div className="grid gap-4 md:grid-cols-2">
              {biomeWaypoints.map((item, index) => (
                <article
                  key={item.title}
                  className={`relative overflow-hidden rounded-[1.6rem] border border-emerald-300/14 bg-[linear-gradient(145deg,rgba(20,31,24,0.96),rgba(25,24,19,0.93)_56%,rgba(18,29,33,0.94))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.34)] ${
                    index % 2 === 1 ? 'md:mt-8' : ''
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,230,53,0.08),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.08),transparent_34%)]" />
                  <div className="relative">
                    <p className="text-[0.66rem] uppercase tracking-[0.28em] text-lime-100/56">
                      Waypoint 0{index + 1}
                    </p>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-[1.15rem] uppercase tracking-[0.1em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/78">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {isWorlds && (
            <div className="grid gap-4 md:grid-cols-2">
              {worldsWaypoints.map((item, index) => (
                <article
                  key={item.title}
                  className={`relative overflow-hidden rounded-[1.6rem] border border-cyan-300/14 bg-[linear-gradient(145deg,rgba(20,28,38,0.96),rgba(24,22,36,0.93)_56%,rgba(18,26,40,0.95))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.34)] ${
                    index % 2 === 1 ? 'md:mt-8' : ''
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.09),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_34%)]" />
                  <div className="relative">
                    <p className="text-[0.66rem] uppercase tracking-[0.28em] text-cyan-100/56">
                      Creative Target 0{index + 1}
                    </p>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-[1.15rem] uppercase tracking-[0.1em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/78">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {project.videos && project.videos.length > 0 && !isWorlds && (
            <div className="space-y-6">
              {project.videos.map((video) => (
                <article
                  key={video}
                  className="rounded-[1.75rem] border border-violet-300/16 bg-[#1c1c1c]/95 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur-sm sm:p-6"
                >
                  <div className="mb-4 flex items-center gap-4 px-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-violet-300/70 to-orange-300/20" />
                    <h2 className={`${oswald.className} text-xl uppercase tracking-[0.12em] text-white`}>
                      Video
                    </h2>
                  </div>
                  <div className="overflow-hidden rounded-[1.25rem] border border-white/12 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                    {video.includes('youtube.com') ? (
                      <iframe
                        className="aspect-video w-full"
                        src={video}
                        title={`${project.title} video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        className="aspect-video w-full bg-black object-contain"
                        src={video}
                        controls
                        playsInline
                        preload="metadata"
                      >
                        <track kind="captions" />
                      </video>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          {project.images && project.images.length > 0 && !isBiomes && (
            <article className={`rounded-[1.75rem] border p-5 shadow-[0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur-sm sm:p-6 ${
              isBiomes
                ? 'border-emerald-300/18 bg-[linear-gradient(155deg,rgba(19,32,24,0.96),rgba(19,21,18,0.92)_56%,rgba(18,28,28,0.94))]'
                : 'border-orange-300/16 bg-[#1c1c1c]/95'
            }`}>
              <div className="mb-4 flex items-center gap-4 px-2">
                <div className={`h-px flex-1 ${
                  isBiomes
                    ? 'bg-gradient-to-r from-emerald-300/70 via-lime-200/35 to-sky-300/20'
                    : 'bg-gradient-to-r from-orange-300/70 to-violet-300/20'
                }`} />
                <h2 className={`${oswald.className} text-xl uppercase tracking-[0.12em] text-white`}>
                  {isBiomes ? 'Field Atlas' : 'Gallery'}
                </h2>
              </div>

              <ProjectImageCarousel
                images={project.images}
                projectTitle={project.title}
                variant={project.carouselVariant}
              />
            </article>
          )}

          {isBiomes && (
            <article className="rounded-[1.75rem] border border-emerald-300/16 bg-[linear-gradient(145deg,rgba(18,27,23,0.95),rgba(22,24,18,0.93)_52%,rgba(18,25,29,0.94))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur-sm sm:p-7">
              <div className="mb-5 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-lime-200/65 via-emerald-300/38 to-sky-300/20" />
                <h2 className={`${oswald.className} text-xl uppercase tracking-[0.12em] text-white`}>
                  Biome Palette
                </h2>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {biomeLabels.map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-sm text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </article>
          )}

          {project.sections && project.sections.length > 0 ? (
            <div className={isShowcaseProject ? 'relative grid gap-6 md:grid-cols-2' : 'space-y-6'}>
              {isBiomes && (
                <div className="pointer-events-none absolute bottom-4 left-1/2 top-4 hidden w-px -translate-x-1/2 bg-gradient-to-b from-lime-200/10 via-emerald-300/34 to-sky-300/10 md:block" />
              )}
              {isWorlds && (
                <div className="pointer-events-none absolute bottom-4 left-1/2 top-4 hidden w-px -translate-x-1/2 bg-gradient-to-b from-cyan-200/10 via-cyan-300/34 to-violet-300/12 md:block" />
              )}
              {project.sections.map((section) => (
                <article
                  key={section.heading}
                  className={`rounded-[1.75rem] border p-7 shadow-[0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur-sm ${
                    isBiomes
                      ? 'border-emerald-300/16 bg-[linear-gradient(145deg,rgba(19,31,24,0.95),rgba(24,22,18,0.93)_55%,rgba(18,28,32,0.94))]'
                      : isWorlds
                        ? 'border-cyan-300/16 bg-[linear-gradient(145deg,rgba(19,27,38,0.95),rgba(24,21,33,0.93)_55%,rgba(18,25,37,0.94))]'
                      : 'border-orange-300/16 bg-[#1c1c1c]/95'
                  } ${
                    isBiomes
                      ? 'md:odd:mt-0 md:even:mt-8'
                      : isWorlds
                        ? 'md:odd:mt-0 md:even:mt-7'
                        : ''
                  } ${
                    isWorlds && (
                      section.shaderShowcase ||
                      section.heading === 'Outcome' ||
                      section.heading === 'What I Focused On'
                    )
                      ? 'md:col-span-2'
                      : ''
                  }`}
                >
                  <div className="mb-5 flex items-center gap-4">
                    <div className={`h-px flex-1 ${
                      isBiomes
                        ? 'bg-gradient-to-r from-emerald-300/68 via-lime-200/28 to-sky-300/18'
                        : isWorlds
                          ? 'bg-gradient-to-r from-cyan-300/70 via-cyan-200/28 to-violet-300/20'
                        : 'bg-gradient-to-r from-orange-300/70 to-violet-300/20'
                    }`} />
                    <h2 className={`${oswald.className} text-2xl uppercase tracking-[0.12em] text-white`}>
                      {section.heading}
                    </h2>
                  </div>
                  {isWorlds && section.heading === 'Interactive Barrier Study' ? (
                    <div className="space-y-4 text-[1.02rem] leading-8 text-white/82">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : isShowcaseProject ? (
                    <ul className="space-y-3 text-[1.02rem] leading-7 text-white/82">
                      {section.body.map((paragraph) => (
                        <li key={paragraph} className="flex gap-3">
                          <span className={`mt-[0.72rem] h-2.5 w-2.5 shrink-0 rounded-full ${
                            isBiomes
                              ? 'bg-gradient-to-br from-lime-200 to-emerald-400 shadow-[0_0_14px_rgba(163,230,53,0.28)]'
                              : 'bg-gradient-to-br from-cyan-200 to-violet-400 shadow-[0_0_14px_rgba(34,211,238,0.26)]'
                          }`} />
                          <span>{paragraph}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="space-y-4 text-[1.02rem] leading-8 text-white/82">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {section.shaderShowcase && section.codeExample && (
                    <ShaderPlayground
                      title={section.codeExample.title}
                      initialCode={section.codeExample.code}
                      language={section.codeExample.language}
                    />
                  )}
                </article>
              ))}
            </div>
          ) : (
            project.responsibilities && (
              <div className="rounded-[1.75rem] border border-white/12 bg-[#1c1c1c]/95 p-8 text-lg leading-8 text-white/82 shadow-[0_24px_70px_rgba(0,0,0,0.36)]">
                {project.responsibilities}
              </div>
            )
          )}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-8">
          <div className={`rounded-[1.75rem] border p-7 shadow-[0_24px_70px_rgba(0,0,0,0.36)] ${
            isBiomes
              ? 'border-emerald-300/16 bg-[linear-gradient(155deg,rgba(16,29,23,0.96),rgba(18,21,18,0.94)_55%,rgba(18,26,31,0.95))]'
              : isWorlds
                ? 'border-cyan-300/16 bg-[linear-gradient(155deg,rgba(18,27,38,0.96),rgba(20,20,32,0.94)_55%,rgba(18,24,37,0.95))]'
              : 'border-violet-300/16 bg-[#1c1c1c]/95'
          }`}>
            <p className="mb-6 text-sm uppercase tracking-[0.28em] text-violet-100/58">
              {isBiomes ? 'System Snapshot' : isWorlds ? 'Arena Snapshot' : 'Snapshot'}
            </p>

            <div className="space-y-5">
              {project.role && (
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/48">
                    Role
                  </p>
                  <p className="mt-2 text-base text-white/88">{project.role}</p>
                </div>
              )}

              {project.date && (
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/48">
                    Date
                  </p>
                  <p className="mt-2 text-base text-white/88">{project.date}</p>
                </div>
              )}

              {project.tools && project.tools.length > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/48">
                    Tools & Tech
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-full border border-white/12 bg-white/[0.07] px-3 py-1 text-sm text-white/82"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}
