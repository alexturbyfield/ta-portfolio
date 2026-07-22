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

const biomeConstraints = [
  {
    title: 'Mobile Hardware',
    body: 'The feature had to hold up on lower-end phones without feeling visually stripped down.',
  },
  {
    title: 'Fast Encounters',
    body: 'Catching is quick, so environment setup cost needed to stay low and predictable.',
  },
  {
    title: 'Live Service Updates',
    body: 'Seasons, events, and world-state changes needed to ship through data rather than custom engineering work.',
  },
  {
    title: 'Location Scale',
    body: 'The system had to respond across cities, coastlines, parks, mountains, and thousands of mixed conditions.',
  },
  {
    title: 'Readability',
    body: 'Pokémon could not be obscured, silhouettes had to stay strong, and scenes needed to read instantly.',
  },
  {
    title: 'Usability',
    body: 'Artists and designers needed a workflow that stayed usable after the initial feature launch.',
  },
]

const biomeOwnership = [
  'Led technical development for the feature across engineering and tech art.',
  'Designed the Scriptable Object pipeline that maps ecosystem and world data to biome behavior.',
  'Built the procedural spawn system for trees, rocks, grass, and supporting environment props.',
  'Drove performance work including GPU instancing, shader cost review, caching, and LOD strategy.',
  'Built artist-facing tools and workflows so the team could author, preview, and tune content at scale.',
]

const biomeArchitecture = [
  {
    label: '01',
    title: 'World and ecosystem data',
    body: 'Street context, terrain, and environment signals define the input state.',
  },
  {
    label: '02',
    title: 'Biome rules',
    body: 'Scriptable Object data translates that input into spawn families, overrides, and visual rules.',
  },
  {
    label: '03',
    title: 'Procedural generation',
    body: 'Seeded placement chooses props and variation while preserving place identity.',
  },
  {
    label: '04',
    title: 'Runtime rendering',
    body: 'Instancing, LODs, and tuned shaders keep the scene performant on mobile hardware.',
  },
  {
    label: '05',
    title: 'Live updates',
    body: 'Seasonal, weather, and event data can reshape the same biome without rebuilding the system.',
  },
]

const biomeResults = [
  'Shipped as a global live service feature in Pokémon GO.',
  'Supported millions of players across a huge range of world locations.',
  'Gave artists a scalable authoring model instead of one-off scene production.',
  'Created a reusable system for biome, event, weather, and seasonal variations.',
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

const whatsYourFavoriteShowcase = [
  {
    src: '/images/projects/whats-your-favorite/trevor-noah.jpg',
    alt: "Trevor Noah What's Your Favorite production render",
    caption: 'Production render',
    frameClass: 'md:col-span-6',
    aspectClass: 'aspect-[2/3]',
    imageClass: 'object-cover',
  },
  {
    src: '/images/projects/whats-your-favorite/wyf02.webp',
    alt: "What's Your Favorite mobile share screen",
    frameClass: 'md:col-span-5 md:mt-12',
    aspectClass: 'aspect-[1/2]',
    imageClass: 'object-cover',
  },
  {
    src: '/images/projects/whats-your-favorite/wyf01.jpg',
    alt: "What's Your Favorite Gengar AR photo moment",
    frameClass: 'md:col-span-7 md:-mt-20 md:ml-8 md:scale-[1.04]',
    aspectClass: 'aspect-[4/5]',
    imageClass: 'object-cover',
    featured: true,
  },
  {
    src: '/images/projects/whats-your-favorite/lady-gaga.jpg',
    alt: "Lady Gaga What's Your Favorite production render",
    caption: 'Production render',
    frameClass: 'md:col-span-5 md:-mt-44',
    aspectClass: 'aspect-[2/3]',
    imageClass: 'object-cover',
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
  const isWhatsYourFavorite = project.slug === 'pogo-whats-your-favorite-ar'
  const isShowcaseProject = isBiomes || isWorlds

  return (
    <div className="relative min-h-screen px-4 pb-10 text-white sm:px-6 sm:pb-12 md:px-8 md:pb-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,218,171,0.12),transparent_18%),radial-gradient(circle_at_82%_16%,rgba(120,174,205,0.08),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(10,16,22,0.14)_28%,rgba(10,13,24,0.34)_100%)]" />
      {project.heroImage && (
        <div className={`relative w-full max-w-5xl overflow-hidden h-[360px] md:h-[460px] ${
          isBiomes
            ? 'rounded-[2.3rem] shadow-[0_40px_120px_rgba(0,0,0,0.42)]'
            : 'rounded-[2rem] border border-white/10'
        }`}>
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
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(239,225,169,0.14)_0%,transparent_38%,rgba(141,194,215,0.14)_78%,transparent_100%)]" />

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
                      ? ['World scale', 'Ecology aware', 'Artist steered']
                      : ['Grand scale', 'Reactive VFX']
                    ).map((item) => (
                      <span
                        key={item}
                        className={`rounded-full px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.22em] backdrop-blur-sm ${
                          isBiomes
                            ? 'border border-white/10 bg-[#172116]/45 text-white/84'
                            : 'border border-white/14 bg-black/35 text-white/82'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
                {project.subtitle && (
                  <p className={`mb-3 text-xs font-medium uppercase tracking-[0.35em] ${
                    isBiomes ? 'text-[#efe1a9]' : 'text-[#efe1a9]/88'
                  }`}>
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
                    A global case study in turning world data, habitat logic,
                    and authored rules into living encounter spaces.
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
              ? 'border-transparent bg-[linear-gradient(145deg,rgba(28,39,26,0.72),rgba(31,35,24,0.64)_48%,rgba(24,31,29,0.66))] shadow-[0_28px_70px_rgba(0,0,0,0.28)]'
              : isWorlds
                ? 'border-[rgba(141,194,215,0.16)] bg-[linear-gradient(145deg,rgba(30,41,35,0.84),rgba(42,44,34,0.78)_48%,rgba(29,39,38,0.8))]'
              : 'border-[rgba(220,231,191,0.12)] bg-[linear-gradient(145deg,rgba(35,48,33,0.76),rgba(42,47,35,0.66)_52%,rgba(32,43,40,0.7))]'
          }`}>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#efe1a9]/58">
              {isBiomes ? 'Research Question' : isWorlds ? 'Arena Premise' : 'Project Overview'}
            </p>
            {project.description && (
              <p className="max-w-3xl text-lg leading-8 text-white/88 md:text-xl">
                {project.description}
              </p>
            )}
          </div>

          {isWhatsYourFavorite && (
            <section className="grid items-start gap-5 md:grid-cols-12 md:gap-6">
              {whatsYourFavoriteShowcase.map((item) => (
                <figure
                  key={item.src}
                  className={`relative ${item.featured ? 'z-10 drop-shadow-[0_28px_48px_rgba(239,225,169,0.16)]' : 'drop-shadow-[0_20px_36px_rgba(0,0,0,0.28)]'} ${item.frameClass}`}
                >
                  {item.featured && (
                    <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(239,225,169,0.18),transparent_68%)] blur-sm" />
                  )}
                  <div className={`relative overflow-hidden rounded-[1.15rem] ${item.aspectClass}`}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
                      className={item.imageClass}
                    />
                    {item.caption && (
                      <>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/38 to-transparent" />
                        <figcaption className="absolute bottom-2 left-2 rounded-full border border-white/8 bg-black/28 px-2 py-1 text-[0.52rem] font-medium uppercase tracking-[0.16em] text-white/58 backdrop-blur-sm">
                          {item.caption}
                        </figcaption>
                      </>
                    )}
                  </div>
                </figure>
              ))}
            </section>
          )}

          {isBiomes && (
            <article className="rounded-[2rem] border border-transparent bg-[linear-gradient(145deg,rgba(31,42,27,0.68),rgba(37,36,25,0.58)_52%,rgba(28,39,34,0.62))] p-6 shadow-[0_26px_60px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-7">
              <div className="mb-5 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-[#cddf8b]/0 via-[#cddf8b]/55 to-[#7eb9d2]/0" />
                <h2 className={`${oswald.className} text-xl uppercase tracking-[0.12em] text-white`}>
                  Key Constraints
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {biomeConstraints.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.45rem] border border-white/6 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.025))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                  >
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-lime-100/54">
                      Constraint
                    </p>
                    <h3 className="mt-3 break-words font-[family-name:var(--font-display)] text-[0.95rem] uppercase leading-5 tracking-[0.04em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/76">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          )}

          {project.images && project.images.length > 0 && isBiomes && (
            <article className="rounded-[2rem] border border-transparent bg-[linear-gradient(155deg,rgba(31,43,29,0.7),rgba(27,30,23,0.58)_56%,rgba(24,36,34,0.62))] p-5 shadow-[0_26px_60px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-6">
              <div className="mb-4 flex items-center gap-4 px-2">
                <div className="h-px flex-1 bg-gradient-to-r from-[#efe1a9]/0 via-[#efe1a9]/52 to-[#8dc2d7]/0" />
                <h2 className={`${oswald.className} text-xl uppercase tracking-[0.12em] text-white`}>
                  Gallery
                </h2>
              </div>

              <ProjectImageCarousel
                images={project.images}
                projectTitle={project.title}
                captions={project.imageCaptions}
                variant="default"
              />
            </article>
          )}

          {isBiomes && (
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)]">
              <article className="rounded-[2rem] border border-transparent bg-[linear-gradient(145deg,rgba(34,45,28,0.66),rgba(35,31,23,0.56)_55%,rgba(28,37,33,0.6))] p-6 shadow-[0_26px_60px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-7">
                <div className="mb-5 flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#efe1a9]/0 via-[#efe1a9]/46 to-[#7eb9d2]/0" />
                  <h2 className={`${oswald.className} text-xl uppercase tracking-[0.12em] text-white`}>
                    Role & Scope
                  </h2>
                </div>

                <ul className="space-y-3 text-[1.02rem] leading-7 text-white/82">
                  {biomeOwnership.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[0.72rem] h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-lime-200 to-emerald-400 shadow-[0_0_14px_rgba(163,230,53,0.28)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[2rem] border border-transparent bg-[linear-gradient(145deg,rgba(30,42,30,0.66),rgba(29,35,25,0.56)_55%,rgba(25,35,35,0.6))] p-6 shadow-[0_26px_60px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-7">
                <div className="mb-5 flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#cddf8b]/0 via-[#cddf8b]/52 to-[#7eb9d2]/0" />
                  <h2 className={`${oswald.className} text-xl uppercase tracking-[0.12em] text-white`}>
                    Biome Flow
                  </h2>
                </div>

                <div className="space-y-4">
                  {biomeArchitecture.map((item, index) => (
                    <div key={item.title}>
                      <div className="rounded-[1.45rem] border border-white/6 bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-lime-200/20 bg-lime-200/[0.08] text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-lime-100/72">
                            {item.label}
                          </div>
                          <div>
                            <h3 className="font-[family-name:var(--font-display)] text-[1rem] uppercase tracking-[0.08em] text-white">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-white/76">
                              {item.body}
                            </p>
                          </div>
                        </div>
                      </div>
                      {index < biomeArchitecture.length - 1 && (
                        <div className="ml-5 mt-3 h-7 w-px bg-gradient-to-b from-[#e7d78e]/40 via-[#9acd86]/24 to-[#7eb9d2]/22" />
                      )}
                    </div>
                  ))}
                </div>
              </article>
            </div>
          )}

          {project.videos && project.videos.length > 0 && isWorlds && (
            <div className="space-y-6">
              {project.videos.map((video) => (
                <article
                  key={video}
                  className="rounded-[1.75rem] border border-[rgba(141,194,215,0.14)] bg-[linear-gradient(145deg,rgba(35,48,33,0.76),rgba(42,47,35,0.66)_52%,rgba(32,43,40,0.7))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur-sm sm:p-6"
                >
                  <div className="mb-4 flex items-center gap-4 px-2">
                    <div className="field-rule" />
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

          {isBiomes && (
            <div className="grid gap-4 md:grid-cols-2">
              {biomeWaypoints.map((item, index) => (
                <article
                  key={item.title}
                  className={`relative overflow-hidden rounded-[1.9rem] border border-transparent bg-[linear-gradient(145deg,rgba(34,46,29,0.66),rgba(38,34,24,0.56)_56%,rgba(27,38,35,0.6))] p-6 shadow-[0_24px_54px_rgba(0,0,0,0.22)] backdrop-blur-md ${
                    index % 2 === 1 ? 'md:mt-8' : ''
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,230,53,0.08),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.08),transparent_34%)]" />
                  <div className="relative">
                    <p className="text-[0.66rem] uppercase tracking-[0.28em] text-lime-100/56">
                      Focus 0{index + 1}
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
                  className={`relative overflow-hidden rounded-[1.6rem] border border-[rgba(141,194,215,0.16)] bg-[linear-gradient(145deg,rgba(31,42,35,0.84),rgba(42,44,34,0.78)_56%,rgba(29,39,38,0.8))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] ${
                    index % 2 === 1 ? 'md:mt-8' : ''
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(205,223,139,0.1),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(141,194,215,0.08),transparent_34%)]" />
                  <div className="relative">
                    <p className="text-[0.66rem] uppercase tracking-[0.28em] text-[#efe1a9]/56">
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
                  className="rounded-[1.75rem] border border-[rgba(141,194,215,0.14)] bg-[linear-gradient(145deg,rgba(35,48,33,0.76),rgba(42,47,35,0.66)_52%,rgba(32,43,40,0.7))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur-sm sm:p-6"
                >
                  <div className="mb-4 flex items-center gap-4 px-2">
                    <div className="field-rule" />
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

          {project.images && project.images.length > 0 && !isBiomes && !isWhatsYourFavorite && (
            <article className={`rounded-[1.75rem] border p-5 shadow-[0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur-sm sm:p-6 ${
              isBiomes
                ? 'border-emerald-300/18 bg-[linear-gradient(155deg,rgba(19,32,24,0.96),rgba(19,21,18,0.92)_56%,rgba(18,28,28,0.94))]'
                : 'border-[rgba(220,231,191,0.12)] bg-[linear-gradient(145deg,rgba(35,48,33,0.76),rgba(42,47,35,0.66)_52%,rgba(32,43,40,0.7))]'
            }`}>
              <div className="mb-4 flex items-center gap-4 px-2">
                <div className={`h-px flex-1 ${
                  isBiomes
                    ? 'bg-gradient-to-r from-emerald-300/70 via-lime-200/35 to-sky-300/20'
                    : 'bg-gradient-to-r from-[#efe1a9]/70 to-[#8dc2d7]/20'
                }`} />
                <h2 className={`${oswald.className} text-xl uppercase tracking-[0.12em] text-white`}>
                  Gallery
                </h2>
              </div>

              <ProjectImageCarousel
                images={project.images}
                projectTitle={project.title}
                captions={project.imageCaptions}
                variant={project.carouselVariant}
              />
            </article>
          )}

          {isBiomes && (
            <article className="rounded-[2rem] border border-transparent bg-[linear-gradient(145deg,rgba(33,45,29,0.66),rgba(34,33,24,0.56)_52%,rgba(27,36,32,0.6))] p-6 shadow-[0_24px_54px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-7">
              <div className="mb-5 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-[#efe1a9]/0 via-[#efe1a9]/46 to-[#8dc2d7]/0" />
                <h2 className={`${oswald.className} text-xl uppercase tracking-[0.12em] text-white`}>
                  Habitats and Conditions
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
            <div
              className={
                isBiomes
                  ? 'space-y-7'
                  : isWorlds
                    ? 'relative grid gap-6 md:grid-cols-2'
                    : 'space-y-6'
              }
            >
              {isWorlds && (
                <div className="pointer-events-none absolute bottom-4 left-1/2 top-4 hidden w-px -translate-x-1/2 bg-gradient-to-b from-[#efe1a9]/0 via-[#cddf8b]/34 to-[#8dc2d7]/14 md:block" />
              )}
              {project.sections.map((section) => (
                <article
                  key={section.heading}
                  className={`rounded-[1.75rem] border p-7 shadow-[0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur-sm ${
                    isBiomes
                      ? 'rounded-[2rem] border-transparent bg-[linear-gradient(145deg,rgba(34,45,29,0.66),rgba(34,32,23,0.56)_55%,rgba(27,37,34,0.6))] shadow-[0_26px_60px_rgba(0,0,0,0.24)] backdrop-blur-md'
                      : isWorlds
                        ? 'border-[rgba(141,194,215,0.16)] bg-[linear-gradient(145deg,rgba(30,41,35,0.84),rgba(42,44,34,0.78)_55%,rgba(29,39,38,0.8))]'
                      : 'border-[rgba(220,231,191,0.12)] bg-[linear-gradient(145deg,rgba(35,48,33,0.76),rgba(42,47,35,0.66)_52%,rgba(32,43,40,0.7))]'
                  } ${
                    isBiomes
                      ? ''
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
                          ? 'bg-gradient-to-r from-[#efe1a9]/70 via-[#cddf8b]/30 to-[#8dc2d7]/20'
                        : 'bg-gradient-to-r from-[#efe1a9]/70 to-[#8dc2d7]/20'
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
                              : 'bg-gradient-to-br from-[#efe1a9] to-[#8dc2d7] shadow-[0_0_14px_rgba(141,194,215,0.22)]'
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
                <div className="rounded-[1.75rem] border border-[rgba(220,231,191,0.12)] bg-[linear-gradient(145deg,rgba(35,48,33,0.76),rgba(42,47,35,0.66)_52%,rgba(32,43,40,0.7))] p-8 text-lg leading-8 text-white/82 shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
                {project.responsibilities}
              </div>
            )
          )}

          {isBiomes && (
            <article className="rounded-[2rem] border border-transparent bg-[linear-gradient(145deg,rgba(32,43,28,0.66),rgba(33,31,23,0.56)_52%,rgba(27,36,32,0.6))] p-6 shadow-[0_24px_54px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-7">
              <div className="mb-5 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-[#efe1a9]/0 via-[#efe1a9]/46 to-[#8dc2d7]/0" />
                <h2 className={`${oswald.className} text-xl uppercase tracking-[0.12em] text-white`}>
                  Findings in the Wild
                </h2>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                {biomeResults.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.2rem] border border-white/10 bg-white/[0.035] px-4 py-4 text-sm leading-7 text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          )}

        </div>

        <aside className="space-y-6 lg:sticky lg:top-8">
          <div className={`rounded-[1.75rem] border p-7 shadow-[0_24px_70px_rgba(0,0,0,0.36)] ${
            isBiomes
              ? 'border-emerald-300/16 bg-[linear-gradient(155deg,rgba(16,29,23,0.96),rgba(18,21,18,0.94)_55%,rgba(18,26,31,0.95))]'
              : isWorlds
                ? 'border-[rgba(141,194,215,0.16)] bg-[linear-gradient(155deg,rgba(30,41,35,0.84),rgba(42,44,34,0.78)_55%,rgba(29,39,38,0.8))]'
              : 'border-[rgba(141,194,215,0.14)] bg-[linear-gradient(145deg,rgba(35,48,33,0.76),rgba(42,47,35,0.66)_52%,rgba(32,43,40,0.7))]'
          }`}>
            <p className="mb-6 text-sm uppercase tracking-[0.28em] text-[#dce9c0]/58">
              {isBiomes ? 'Snapshot' : isWorlds ? 'Arena Snapshot' : 'Snapshot'}
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

              {isBiomes && (
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/48">
                    Context
                  </p>
                  <p className="mt-2 text-base text-white/88">
                    Live service mobile encounter environments for a global player base.
                  </p>
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
