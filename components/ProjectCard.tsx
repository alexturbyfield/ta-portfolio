import Link from 'next/link'

type ProjectCardProps = {
  title: string
  description: string
  href: string
  role?: string
  date?: string
  subtitle?: string
}

export default function ProjectCard({
  title,
  description,
  href,
  role,
  date,
  subtitle,
}: ProjectCardProps) {
  return (
    <Link href={href} className="group relative block">
      <div className="pointer-events-none absolute left-[-1.15rem] top-9 hidden h-px w-5 bg-gradient-to-r from-orange-300/45 to-transparent lg:block" />
      <div className="pointer-events-none absolute left-[-1.35rem] top-[1.9rem] hidden h-4 w-4 rounded-full border border-violet-300/35 bg-[#121212] shadow-[0_0_0_6px_rgba(18,18,18,1)] lg:block" />

      <article className="relative overflow-hidden rounded-[1.45rem] border border-white/12 bg-[#1a1a1a]/92 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition duration-300 group-hover:-translate-y-1 group-hover:border-orange-300/24 group-hover:bg-[#202020]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.05),transparent_34%,transparent_70%,rgba(255,255,255,0.03))]" />
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(255,154,76,0.14)_0%,transparent_42%,rgba(145,104,255,0.12)_82%,transparent_100%)]" />

        <div className="relative">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.32em] text-orange-100/46">
                Project
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl uppercase leading-tight text-white">
                {title}
              </h3>
            </div>
            <span className="rounded-full border border-violet-300/18 bg-violet-300/[0.08] px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.24em] text-violet-100/68">
              Open
            </span>
          </div>

          {subtitle && (
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-orange-100/58">
              {subtitle}
            </p>
          )}

          <p className="text-sm leading-7 text-slate-300/82">{description}</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {role && (
              <div className="rounded-xl border border-white/8 bg-black/20 px-3 py-3">
                <p className="text-[0.62rem] uppercase tracking-[0.26em] text-violet-100/42">
                  Role
                </p>
                <p className="mt-2 text-sm text-slate-200/86">{role}</p>
              </div>
            )}

            {date && (
              <div className="rounded-xl border border-white/8 bg-black/20 px-3 py-3">
                <p className="text-[0.62rem] uppercase tracking-[0.26em] text-violet-100/42">
                  Window
                </p>
                <p className="mt-2 text-sm text-slate-200/86">{date}</p>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}
