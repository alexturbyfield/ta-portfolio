const contactLinks = [
  {
    label: 'Email',
    value: 'aturbyfield@gmail.com',
    href: 'mailto:aturbyfield@gmail.com',
    note: 'Best for project inquiries, collaborations, and portfolio questions.',
  },
  {
    label: 'LinkedIn',
    value: 'LinkedIn Profile',
    href: 'https://www.linkedin.com/in/alex-turbyfield-662b822b/',
    note: 'A good place for professional background, experience, and networking.',
  },
]

export default function ContactPage() {
  return (
    <section className="page-shell px-6 py-8 sm:px-8 md:px-10 lg:px-12 lg:py-12">
      <div className="relative space-y-8 md:space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
          <div className="space-y-6">
            <div className="field-chip inline-flex items-center gap-3 rounded-full px-4 py-2 text-[0.68rem] uppercase tracking-[0.34em]">
              <span className="h-2 w-2 rounded-full bg-[#efe1a9] shadow-[0_0_12px_rgba(239,225,169,0.65)]" />
              Contact
            </div>

            <div className="space-y-4">
              <p className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.34em] text-[rgba(247,244,232,0.66)]">
                Open Channel
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl uppercase leading-[0.95] text-white drop-shadow-[0_12px_32px_rgba(8,14,10,0.28)] sm:text-5xl lg:text-6xl">
                Got a tricky
                <br />
                visual problem?
              </h1>
            </div>

            <div className="max-w-3xl space-y-5 text-base leading-8 text-[rgba(247,244,232,0.84)] sm:text-lg">
              <p>
                If you&apos;re looking for someone who can move between visual
                craft, technical systems, and team collaboration, I&apos;d love
                to hear about the project.
              </p>
              <p>
                I&apos;m especially interested in real-time graphics, tools,
                gameplay-supporting systems, and technical art work that helps
                production stay clear, flexible, and shippable.
              </p>
            </div>
          </div>

          <aside className="field-panel rounded-[1.7rem] p-6">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[rgba(247,244,232,0.52)]">
              Contact Notes
            </p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-[rgba(247,244,232,0.82)]">
              <p>
                Based in Redmond, WA, and happy to be contacted from anywhere
                about technical art, graphics implementation, tools, and game
                production support.
              </p>
              <p>
                Email is usually the best starting point, but you can also find
                me through LinkedIn if that is easier.
              </p>
            </div>
          </aside>
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={
                item.href.startsWith('http') ? 'noreferrer noopener' : undefined
              }
              className="group field-panel rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/26"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[rgba(247,244,232,0.52)]">
                    {item.label}
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-display)] text-xl uppercase leading-tight text-white">
                    {item.value}
                  </p>
                </div>
                <span className="rounded-full border border-white/12 bg-[rgba(255,255,255,0.08)] px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.24em] text-[rgba(247,244,232,0.72)] transition group-hover:border-white/22 group-hover:bg-[rgba(255,255,255,0.14)]">
                  Open
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-[rgba(247,244,232,0.82)]">
                {item.note}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
