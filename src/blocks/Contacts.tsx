import { FunctionalComponent } from "preact"

const Link: FunctionalComponent<{ href: string }> = ({ href, children }) => (
  <a
    className="
      after:content-['↗'] underline decoration-wavy
      underline-offset-2 decoration-green-500/50 hover:decoration-green-600
      hover:scale-110 transition-all hover:rotate-1
    "
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

const email = "hi@madiyar.dev"

const links = [
  { href: "https://t.me/kawaii_neko", text: "telegram" },
  { href: "https://linkedin.com/in/madiyarkz/", text: "linkedin" },
  { href: "https://github.com/madiyar", text: "github" },
]

const Contacts = () => (
  <section className="bg-zinc-800 min-h-screen flex items-center justify-center flex-col gap-y-6">
    <a href={`mailto:${email}`} className="text-4xl md:text-6xl font-bold hover:scale-105 transition-all">{email}</a>
    <div className="flex items-center gap-x-4 text-xl">
      {links.map(({ href, text }) => (
        <Link key={text} href={href}>{text}</Link>
      ))}
    </div>
  </section>
)

export default Contacts
