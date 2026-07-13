import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'

export default function ProjectsPage() {
  return (
    <section className="page-shell px-6 py-8 pb-12 sm:px-8 sm:pb-14 md:px-10 lg:px-12 lg:py-12 lg:pb-16">
      <div className="relative space-y-10">
        <div className="max-w-4xl space-y-4">
          <p className="text-sm uppercase tracking-[0.34em] text-[rgba(247,244,232,0.66)]">
            Selected Work
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl uppercase leading-[0.95] text-white drop-shadow-[0_12px_32px_rgba(8,14,10,0.28)] sm:text-5xl lg:text-6xl">
            Technical art,
            <br />
            systems, tools,
            <br />
            and shipped work
          </h1>
          <p className="max-w-3xl text-base leading-8 text-[rgba(247,244,232,0.82)] sm:text-lg">
            A selection of projects across live games, graphics migrations,
            educational software, and cross-discipline technical art work.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className={index % 2 === 1 ? 'xl:translate-y-10' : ''}
            >
              <ProjectCard
                title={project.title}
                subtitle={project.subtitle}
                role={project.role}
                date={project.date}
                description={project.description}
                imageSrc={project.heroImage}
                imagePosition={project.heroImagePosition}
                imageContain={project.heroImageContain}
                href={`/projects/${project.slug}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
