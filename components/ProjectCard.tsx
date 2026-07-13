import Image from 'next/image'
import Link from 'next/link'

type ProjectCardProps = {
  title: string
  description: string
  href: string
  role?: string
  date?: string
  subtitle?: string
  imageSrc?: string
  imagePosition?: string
  imageContain?: boolean
}

export default function ProjectCard({
  title,
  description,
  href,
  role,
  date,
  subtitle,
  imageSrc,
  imagePosition,
  imageContain,
}: ProjectCardProps) {
  return (
    <Link href={href} className="group relative block">
      <article className="field-panel relative overflow-hidden rounded-[1.75rem] transition duration-300 group-hover:-translate-y-1.5 group-hover:border-white/28">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),transparent_36%,transparent_72%,rgba(255,255,255,0.04))]" />

        <div className="relative">
          <div className="relative aspect-[16/9] overflow-hidden border-b border-white/12 bg-black/16">
            {imageSrc ? (
              <>
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  sizes="(min-width: 1280px) 40vw, (min-width: 768px) 50vw, 100vw"
                  className={`transition duration-500 group-hover:scale-[1.04] ${
                    imageContain ? 'object-contain p-5' : 'object-cover'
                  }`}
                  style={imagePosition ? { objectPosition: imagePosition } : undefined}
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,10,0.04)_0%,rgba(8,12,10,0.08)_34%,rgba(8,12,10,0.72)_100%),linear-gradient(135deg,rgba(255,255,255,0.1),transparent_30%,transparent_72%,rgba(255,255,255,0.03))]" />
              </>
            ) : (
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(240,226,174,0.22)_0%,rgba(24,35,28,0.2)_44%,rgba(172,209,227,0.2)_100%)]" />
            )}

            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              {date && (
                <span className="rounded-full border border-white/14 bg-[rgba(18,27,20,0.38)] px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.22em] text-white/82 backdrop-blur-sm">
                  {date}
                </span>
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-12">
              {subtitle && (
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[#f0e2ae]/76">
                  {subtitle}
                </p>
              )}
              <div className="mt-3 flex items-start justify-between gap-4">
                <h3 className="max-w-[26rem] font-[family-name:var(--font-display)] text-[1.45rem] uppercase leading-[1.02] text-white sm:text-[1.65rem]">
                  {title}
                </h3>
                <span className="translate-y-0.5 text-xl text-white/58 transition duration-300 group-hover:translate-x-1 group-hover:text-white/90">
                  →
                </span>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-sm leading-7 text-[rgba(247,244,232,0.84)]">
              {description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {role && (
                <span className="rounded-full border border-white/12 bg-[rgba(255,255,255,0.08)] px-3 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-[rgba(247,244,232,0.78)]">
                  {role}
                </span>
              )}
              <span className="rounded-full border border-white/12 bg-[rgba(18,27,20,0.28)] px-3 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-[rgba(247,244,232,0.72)]">
                View Case Study
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
