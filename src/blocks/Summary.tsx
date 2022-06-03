import { FunctionalComponent } from "preact"

interface Props {
  title: string;
  full?: boolean;
  href?: string;
}

const Card: FunctionalComponent<Props> = ({ title, children, full = false, href }) => (
  <div className={`flex flex-col bg-zinc-700 border border-zinc-600 p-8 rounded-3xl ${full ? "w-full" : "max-w-lg shrink-0"}`}>
    {href ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline text-xl font-medium mb-2">{title}</a>
    ) : (
      <h2 className="text-xl font-medium mb-2">{title}</h2>
    )}
    {children}
  </div>
)

const Summary = () => (
  <section className="min-h-screen p-12 md:p-16 flex flex-col justify-center">
    <div className="grid gap-8 mb-16 grid-cols-1 md:grid-cols-2">
      <Card title="Experience: 2+ year" full>
        <p>— Alfa Bank, 2021-2022</p>
        <p>— DAR, 2020-2021</p>
      </Card>
      <Card title="Skills" full>
        JavaScript, TypeScript, React, Redux (Toolkit, Saga), React Query, Tailwind CSS, Material UI, Jest, Testing Library,
        Vite.js
      </Card>
    </div>
    <h2 className="text-4xl font-bold mb-8">✦ Projects</h2>
    <div className="overflow-x-scroll w-full flex gap-x-8 pb-8">
      <Card title="Portfolio 2k22">My personal website, built with Vite.js, Preact, Tailwind CSS, GitHub Actions</Card>
      <Card title="vite-tailwind" href="https://github.com/madiyar/vite-tailwind">Vite.js + PostCSS + SCSS + Tailwind CSS boilerplate for landing pages</Card>
      <Card title="Vsratobot">VK Bot on  PHP</Card>
      <Card title="Rideshare" href="https://github.com/madiyar/ride-sharing">InDriver clone built with Nest.js, TypeORM, MySQL, React, Material Ui, Redux Saga</Card>
    </div>
  </section>
)

export default Summary
