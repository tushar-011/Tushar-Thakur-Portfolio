import { Code2, Database, BrainCircuit, BarChart3, Workflow, Globe2 } from "lucide-react";

const groups = [
  { title: "Programming", icon: Code2, tools: ["Python", "Java", "JavaScript", "R", "C / C++"] },
  { title: "Data & BI", icon: BarChart3, tools: ["Power BI", "Tableau", "Excel", "ggplot2"] },
  { title: "AI & Automation", icon: BrainCircuit, tools: ["Gemini AI", "Generative AI", "Make.com", "Prompt Engineering"] },
  { title: "Databases", icon: Database, tools: ["MySQL", "SQLite", "SQL"] },
  { title: "Web Development", icon: Globe2, tools: ["React", "Flask", "Spring Boot", "Tailwind CSS"] },
  { title: "Tools & Workflow", icon: Workflow, tools: ["Git", "GitHub", "VS Code", "Shiny"] },
] as const;

export function TechStack() {
  return <section id="tech-stack" className="relative z-10 px-5 py-20 md:px-8" aria-labelledby="tech-stack-title">
    <div className="mx-auto max-w-7xl">
      <p className="font-sketch text-3xl text-signal">the tools behind the work ↗</p>
      <h2 id="tech-stack-title" className="mt-3 font-display text-4xl font-bold tracking-normal sm:text-5xl md:text-7xl">My technical toolkit.</h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">Technologies I've worked with across coursework, experiments, and practical projects.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, index) => <article key={group.title} className="rounded-[1.7rem] border border-border bg-card/85 p-6 shadow-pencil transition-transform duration-200 hover:-translate-y-1">
          <div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-2xl border border-signal/25 bg-signal/10 text-signal"><group.icon aria-hidden="true" className="size-6" /></span><span className="font-mono text-xs text-muted-foreground">0{index + 1} / STACK</span></div>
          <h3 className="mt-6 font-display text-2xl font-bold">{group.title}</h3>
          <div className="mt-5 flex flex-wrap gap-2">{group.tools.map((tool) => <span key={tool} className="rounded-full border border-border bg-background/70 px-3 py-2 font-mono text-xs font-semibold text-foreground">{tool}</span>)}</div>
        </article>)}
      </div>
    </div>
  </section>;
}
