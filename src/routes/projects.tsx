import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Layers3, Lightbulb, Send, Mail } from "lucide-react";
import type { FormEvent } from "react";
import { useMemo, useState } from "react";

import { LabStrip } from "@/components/DataVisuals";
import { PortfolioShell } from "@/components/PortfolioShell";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/portfolio-data";
import { gmailComposeUrl } from "@/lib/contact-info";

const filters = ["ALL", "DATA", "AI", "AUTOMATION", "WEB", "EXPERIMENTS", "HACKATHONS"] as const;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Tushar Thakur" },
      { name: "description", content: "Explore Tushar Thakur's Data Science, AI automation, hackathon, and web development project portfolio." },
      { property: "og:title", content: "Projects — Tushar Thakur" },
      { property: "og:description", content: "Explore seven real projects across Data Science, AI automation, algorithms, and full-stack development." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("ALL");
  const [ideaName, setIdeaName] = useState("");
  const [ideaEmail, setIdeaEmail] = useState("");
  const [ideaType, setIdeaType] = useState("Web application");
  const [ideaMessage, setIdeaMessage] = useState("");
  function submitIdea(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `Portfolio project idea: ${ideaType}`;
    const body = `Hello Tushar,\n\nI have a project idea to share.\n\nName: ${ideaName}\nEmail: ${ideaEmail}\nProject type: ${ideaType}\n\nIdea:\n${ideaMessage}\n\nThanks!`;
    window.open(gmailComposeUrl(subject, body), "_blank", "noopener,noreferrer");
  }
  const visibleProjects = useMemo(() => {
    if (active === "ALL") return projects;
    return projects.filter((project) => project.category === active || project.tags.some((tag) => tag === active));
  }, [active]);

  return (
    <PortfolioShell>
      <main className="relative overflow-hidden px-5 pb-24 pt-32 md:px-8">
        <section className="mx-auto grid max-w-7xl gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="font-sketch text-3xl text-signal">selected work / evolving archive</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-none tracking-normal text-foreground md:text-7xl">
              Project sheets, prototypes and case studies.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Hands-on projects across AI, data analysis, automation, civic tech and full-stack development. Explore the workflows, read technical case studies and visit each GitHub repository.
          </p>
        </section>

        <section className="mx-auto max-w-7xl">
          <div className="sticky top-24 z-20 flex flex-wrap gap-2 py-4">
            {filters.map((filter) => (
              <Button key={filter} variant={active === filter ? "signal" : "glass"} size="sm" onClick={() => setActive(filter)} data-cursor="FILTER">
                {filter}
              </Button>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {visibleProjects.map((project, index) => (
              <article key={project.slug} className="group relative min-h-[520px] overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-pencil">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--graphite)_7%,transparent)_1px,transparent_1px),linear-gradient(color-mix(in_oklab,var(--graphite)_7%,transparent)_1px,transparent_1px)] bg-[size:34px_34px] opacity-60" />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs text-muted-foreground">PROJECT 0{index + 1}</span>
                      <h2 className="mt-3 font-display text-4xl font-bold tracking-normal text-foreground">{project.title}</h2>
                      <p className="mt-2 text-sm font-semibold uppercase text-signal">{project.label}</p>
                    </div>
                    <Layers3 className="size-8 text-data-cyan" />
                  </div>

                  <div className="my-8 min-h-44 rounded-2xl border border-border bg-secondary p-4">
                    <FlowLine steps={project.flow} />
                  </div>

                  <p className="text-base leading-7 text-muted-foreground">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="glass-control rounded-full px-3 py-1 font-mono text-[11px] text-foreground">{tag}</span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-8">
                    <Button variant="glass" asChild data-cursor="OPEN">
                      <a href={`/blogs?blog=${project.blogSlug}`}>View Case Study <ArrowUpRight /></a>
                    </Button>
                    <Button variant="blueprint" asChild data-cursor="OPEN">
                      <a href={`/blogs?blog=${project.blogSlug}`}>View Documentation</a>
                    </Button>
                    <Button variant="ghost" asChild data-cursor="OPEN">
                      <a href={project.github} target="_blank" rel="noopener noreferrer"><Github /> GitHub</a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-7xl overflow-hidden rounded-[2rem] border border-border bg-glass p-6 backdrop-blur-xl md:p-10" aria-labelledby="idea-title">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-xs"><Lightbulb size={16} className="text-signal" /> LET'S BUILD SOMETHING</span>
              <p className="mt-7 font-sketch text-3xl text-signal">your idea, our next experiment</p>
              <h2 id="idea-title" className="mt-4 max-w-lg font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">Have an idea? I'd love to build it.</h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">A useful app, an automation workflow, a data dashboard or a creative experiment — share your concept. I'll read it and we can explore what it could become.</p>
              <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"><Mail size={16} /> Opens a Gmail draft for you to review and send.</p>
            </div>
            <form onSubmit={submitIdea} className="grid gap-4 rounded-[1.6rem] border border-black/10 bg-[#eae7e2] p-5 text-[#111820] shadow-pencil sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold">Your name<input required maxLength={100} value={ideaName} onChange={e=>setIdeaName(e.target.value)} placeholder="Your name" className="w-full rounded-xl border border-black/20 bg-white/80 px-4 py-3 text-[#111820] outline-none focus:border-[#d63c3c]" /></label>
                <label className="grid gap-2 text-sm font-semibold">Your email<input required type="email" maxLength={160} value={ideaEmail} onChange={e=>setIdeaEmail(e.target.value)} placeholder="you@example.com" className="w-full rounded-xl border border-black/20 bg-white/80 px-4 py-3 text-[#111820] outline-none focus:border-[#d63c3c]" /></label>
              </div>
              <label className="grid gap-2 text-sm font-semibold">What kind of idea?<select value={ideaType} onChange={e=>setIdeaType(e.target.value)} className="w-full rounded-xl border border-black/20 bg-white/80 px-4 py-3 text-[#111820] outline-none focus:border-[#d63c3c]"><option>Web application</option><option>AI / Automation</option><option>Data visualization</option><option>Mobile / Desktop app</option><option>Something else</option></select></label>
              <label className="grid gap-2 text-sm font-semibold">Tell me about it<textarea required minLength={10} maxLength={3000} rows={6} value={ideaMessage} onChange={e=>setIdeaMessage(e.target.value)} placeholder="What's the problem or idea? Who would use it?" className="w-full resize-y rounded-xl border border-black/20 bg-white/80 px-4 py-3 text-[#111820] outline-none focus:border-[#d63c3c]" /></label>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d63c3c] px-6 py-3.5 font-semibold text-white transition hover:bg-[#b92929]"><Send size={18} /> Share your idea via Gmail</button>
              <p className="text-xs leading-5 text-[#475569]">This form doesn't store your details or send messages automatically. You can review and send the email from your Gmail account.</p>
            </form>
          </div>
        </section>

        <div className="mx-auto mt-20 max-w-7xl"><LabStrip /></div>
      </main>
    </PortfolioShell>
  );
}

function FlowLine({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="grid h-full grid-cols-2 content-center gap-2 sm:grid-cols-4">
      {steps.map((step, index) => (
        <li key={`${step}-${index}`} className="flex min-h-24 flex-col justify-between rounded-xl border border-border bg-paper/70 p-3 shadow-sm">
          <span className="font-mono text-[10px] text-signal">0{index + 1}</span>
          <span className="text-xs font-semibold leading-5">{step}</span>
        </li>
      ))}
    </ol>
  );
}
