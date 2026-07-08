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
      <div className="pointer-events-none absolute left-[-1.15rem] top-9 hidden h-px w-5 bg-gradient-to-r from-orange-300/45 to-transparent lg:block" />
      <div className="pointer-events-none absolute left-[-1.35rem] top-[1.9rem] hidden h-4 w-4 rounded-full border border-violet-300/35 bg-[#121212] shadow-[0_0_0_6px_rgba(18,18,18,1)] lg:block" />

      <article className="relative overflow-hidden rounded-[1.55rem] border border-white/12 bg-[#1a1a1a]/94 shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition duration-300 group-hover:-translate-y-1.5 group-hover:border-orange-300/24 group-hover:bg-[#202020]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.05),transparent_34%,transparent_70%,rgba(255,255,255,0.03))]" />
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(255,154,76,0.14)_0%,transparent_42%,rgba(145,104,255,0.12)_82%,transparent_100%)]" />

        <div className="relative">
          <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-black/25">
            {imageSrc ? (
              <>
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  sizes="(min-width: 1280px) 40vw, (min-width: 768px) 50vw, 100vw"
                  className={`transition duration-500 group-hover:scale-[1.035] ${
                    imageContain ? 'object-contain p-5' : 'object-cover'
                  }`}
                  style={imagePosition ? { objectPosition: imagePosition } : undefined}
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.08)_0%,rgba(10,10,10,0.12)_38%,rgba(10,10,10,0.74)_100%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_34%,transparent_74%,rgba(255,255,255,0.02))]" />
              </>
            ) : (
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,154,76,0.18)_0%,rgba(30,30,30,0.24)_44%,rgba(145,104,255,0.18)_100%)]" />
            )}

            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              {date && (
                <span className="rounded-full border border-white/12 bg-black/42 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.22em] text-white/76 backdrop-blur-sm">
                  {date}
                </span>
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-12">
              {subtitle && (
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-orange-100/68">
                  {subtitle}
                </p>
              )}
              <div className="mt-3 flex items-start justify-between gap-4">
                <h3 className="max-w-[26rem] font-[family-name:var(--font-display)] text-[1.45rem] uppercase leading-[1.02] text-white sm:text-[1.6rem]">
                  {title}
                </h3>
                <span className="translate-y-0.5 text-xl text-white/54 transition duration-300 group-hover:translate-x-1 group-hover:text-white/86">
                  →
                </span>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-sm leading-7 text-slate-300/82">{description}</p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {role && (
                <span className="rounded-full border border-violet-300/14 bg-violet-300/[0.08] px-3 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-violet-100/72">
                  {role}
                </span>
              )}
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-slate-200/66">
                View Case Study
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
