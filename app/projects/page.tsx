import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'

export default function ProjectsPage() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-orange-300/10 bg-[#181818]/92 px-6 py-8 shadow-[0_36px_100px_rgba(0,0,0,0.34)] sm:px-8 md:px-10 lg:px-12 lg:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,154,76,0.14)_0%,transparent_34%,rgba(145,104,255,0.12)_70%,transparent_100%),linear-gradient(24deg,transparent_8%,rgba(255,154,76,0.07)_42%,transparent_68%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(140,215,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(140,215,255,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="relative space-y-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.75fr)] lg:items-end">
          <div className="space-y-4">
            <p className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.34em] text-orange-100/58">
              Selected Work
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl uppercase leading-[0.95] text-white sm:text-5xl lg:text-6xl">
              Technical art,
              <br />
              systems, tools,
              <br />
              and shipped work
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-300/78 sm:text-lg">
              A selection of projects across live games, graphics migrations,
              educational software, and cross-discipline technical art work,
              with an emphasis on real-time systems, production tooling, and
              visually driven implementation that can also translate well to
              design technologist and simulation-minded work.
            </p>
          </div>

          <div className="rounded-[1.45rem] border border-violet-300/12 bg-[#1a1a1a]/86 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-violet-100/48">
              Active Set
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300/82">
              Real-time graphics, procedural environments, tool building,
              rendering migrations, interactive software, and cross-team
              production support.
            </p>
          </div>
        </div>

        <div className="relative pl-0 lg:pl-8">
          <div className="pointer-events-none absolute bottom-8 left-[0.45rem] top-8 hidden w-px bg-gradient-to-b from-orange-300/20 via-violet-300/45 to-transparent lg:block" />

          <div className="grid gap-5 xl:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className={index % 2 === 1 ? 'xl:translate-y-12' : ''}
              >
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  role={project.role}
                  date={project.date}
                  description={project.description}
                  href={`/projects/${project.slug}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
