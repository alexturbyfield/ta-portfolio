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
    <section className="relative overflow-hidden rounded-[2rem] border border-orange-300/10 bg-[#181818]/92 px-6 py-8 shadow-[0_36px_100px_rgba(0,0,0,0.34)] sm:px-8 md:px-10 lg:px-12 lg:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,154,76,0.14)_0%,transparent_34%,rgba(145,104,255,0.12)_70%,transparent_100%),linear-gradient(24deg,transparent_8%,rgba(255,154,76,0.07)_42%,transparent_68%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(140,215,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(140,215,255,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="relative space-y-8 md:space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-orange-300/20 bg-orange-300/[0.07] px-4 py-2 text-[0.68rem] uppercase tracking-[0.34em] text-orange-100/80">
              <span className="h-2 w-2 rounded-full bg-orange-300 shadow-[0_0_12px_rgba(253,186,116,0.75)]" />
              Contact
            </div>

            <div className="space-y-4">
              <p className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.34em] text-orange-100/58">
                Open Channel
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl uppercase leading-[0.95] text-white sm:text-5xl lg:text-6xl">
                Got a tricky
                <br />
                visual problem?
              </h1>
            </div>

            <div className="max-w-3xl space-y-5 text-base leading-8 text-slate-300/78 sm:text-lg">
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

          <aside className="rounded-[1.6rem] border border-violet-300/12 bg-[#1a1a1a]/88 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-violet-100/48">
              Contact Notes
            </p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300/76">
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
              className="group rounded-[1.45rem] border border-white/12 bg-[#1a1a1a]/88 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-orange-300/24 hover:bg-[#202020]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-orange-100/48">
                    {item.label}
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-display)] text-xl uppercase leading-tight text-white">
                    {item.value}
                  </p>
                </div>
                <span className="rounded-full border border-violet-300/18 bg-violet-300/[0.08] px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.24em] text-violet-100/68 transition group-hover:border-violet-300/28 group-hover:bg-violet-300/[0.14]">
                  Open
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-300/78">
                {item.note}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
