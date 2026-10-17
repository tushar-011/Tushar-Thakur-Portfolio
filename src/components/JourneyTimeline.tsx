import { ArrowUpRight, GraduationCap, BriefcaseBusiness, Rocket, Trophy } from "lucide-react";

const milestones = [
  { period: "2026 — PRESENT", title: "MCA · Data Science", place: "Chandigarh University", description: "Continuing my studies while building data, AI, automation and full-stack projects.", icon: GraduationCap },
  { period: "2025 — 2026", title: "Project building & hackathons", place: "Independent work and competitions", description: "Developed platforms including CivicMitra and Career Compass, alongside practical desktop, database and analytics applications.", icon: Rocket },
  { period: "DEC 2025", title: "Data Analytics Job Simulation", place: "Deloitte Australia · Forage", description: "Completed a virtual experience involving analysis, reporting and dashboard-oriented tasks.", icon: BriefcaseBusiness },
  { period: "2023 — 2026", title: "Bachelor of Computer Applications", place: "DAV College · Panjab University", description: "Built a foundation in programming, databases, software design and computing.", icon: GraduationCap },
  { period: "BEYOND THE CLASSROOM", title: "Competitions & community", place: "Hackathons · NCC · Volunteering", description: "Participated in technical challenges, leadership activities and community initiatives.", icon: Trophy },
] as const;

export function JourneyTimeline() {
  return <section id="journey" className="relative z-10 px-5 py-24 md:px-8" aria-labelledby="journey-title">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-wrap items-end justify-between gap-6"><div><p className="font-sketch text-3xl text-signal">one step at a time →</p><h2 id="journey-title" className="mt-3 font-display text-4xl font-bold sm:text-5xl md:text-7xl">The journey so far.</h2></div><a href="/certifications" className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/80 px-5 py-3 font-semibold hover:text-signal">See the milestones <ArrowUpRight className="size-4" /></a></div>
      <p className="mt-5 max-w-2xl text-muted-foreground">A few moments that shaped how I learn, experiment and build.</p>
      <ol className="relative mt-12 border-l-2 border-signal/30 pl-6 sm:pl-10">
        {milestones.map((item) => <li key={item.title} className="relative mb-6 last:mb-0"><span className="absolute -left-[34px] top-7 grid size-4 place-items-center rounded-full border-4 border-background bg-signal sm:-left-[50px]" /><article className="rounded-[1.5rem] border border-border bg-card/85 p-5 shadow-pencil sm:p-7"><div className="flex flex-wrap items-start justify-between gap-4"><span className="font-mono text-xs font-semibold tracking-wider text-signal">{item.period}</span><item.icon className="size-5 text-signal" aria-hidden="true" /></div><h3 className="mt-3 font-display text-2xl font-bold">{item.title}</h3><p className="mt-2 font-semibold text-foreground/80">{item.place}</p><p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{item.description}</p></article></li>)}
      </ol>
    </div>
  </section>;
}
