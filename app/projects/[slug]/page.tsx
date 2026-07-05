import Image from 'next/image'
import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import { Oswald } from 'next/font/google'
import ProjectImageCarousel from '@/components/ProjectImageCarousel'
import ShaderPlayground from '@/components/ShaderPlayground'

// Oswald font for hero title only
const oswald = Oswald({ weight: '700', subsets: ['latin'], display: 'swap' })

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

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

              <div className="absolute bottom-0 left-1/2 w-full max-w-3xl -translate-x-1/2 p-6 text-center md:p-10">
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
              </div>
            </>
          )}
        </div>
      )}

      <section className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1.75fr)_minmax(280px,0.95fr)] lg:items-start">
        <div className="space-y-8">
          <div className="rounded-[1.75rem] border border-orange-300/16 bg-[#1c1c1c]/95 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur-sm">
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-orange-100/58">
              Project Overview
            </p>
            {project.description && (
              <p className="max-w-3xl text-lg leading-8 text-white/88 md:text-xl">
                {project.description}
              </p>
            )}
          </div>

          {project.videos && project.videos.length > 0 && (
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

          {project.images && project.images.length > 0 && (
            <article className="rounded-[1.75rem] border border-orange-300/16 bg-[#1c1c1c]/95 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur-sm sm:p-6">
              <div className="mb-4 flex items-center gap-4 px-2">
                <div className="h-px flex-1 bg-gradient-to-r from-orange-300/70 to-violet-300/20" />
                <h2 className={`${oswald.className} text-xl uppercase tracking-[0.12em] text-white`}>
                  Gallery
                </h2>
              </div>

              <ProjectImageCarousel
                images={project.images}
                projectTitle={project.title}
              />
            </article>
          )}

          {project.sections && project.sections.length > 0 ? (
            <div className="space-y-6">
              {project.sections.map((section) => (
                <article
                  key={section.heading}
                  className="rounded-[1.75rem] border border-orange-300/16 bg-[#1c1c1c]/95 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur-sm"
                >
                  <div className="mb-5 flex items-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-orange-300/70 to-violet-300/20" />
                    <h2 className={`${oswald.className} text-2xl uppercase tracking-[0.12em] text-white`}>
                      {section.heading}
                    </h2>
                  </div>
                  <div className="space-y-4 text-[1.02rem] leading-8 text-white/82">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

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
          <div className="rounded-[1.75rem] border border-violet-300/16 bg-[#1c1c1c]/95 p-7 shadow-[0_24px_70px_rgba(0,0,0,0.36)]">
            <p className="mb-6 text-sm uppercase tracking-[0.28em] text-violet-100/58">
              Snapshot
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
