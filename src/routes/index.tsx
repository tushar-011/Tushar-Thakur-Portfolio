import { createFileRoute, Link } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Download, Github, Linkedin, Mail, Send, Sparkles } from "lucide-react";

import { BlogGallery } from "@/components/BlogGallery";
import { CertificateGallery } from "@/components/CertificateGallery";
import { DataSurface, LabStrip, ProfileComposition } from "@/components/DataVisuals";
import { ContinuityPath, SectionNavigation } from "@/components/PortfolioInteractions";
import { PortfolioShell } from "@/components/PortfolioShell";
import { TechStack } from "@/components/TechStack";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { ResumePreview } from "@/components/ResumePreview";
import { Button } from "@/components/ui/button";
import { contactInfo, gmailComposeHref, gmailComposeUrl } from "@/lib/contact-info";
import { education, explorations, heroSkills, interests, projects, scrollSections, secondarySkills, services, skillNodes } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tushar Thakur — Data × AI × Automation Portfolio" },
      { name: "description", content: "Interactive portfolio for Tushar Thakur, an MCA Data Science student building with Data Science, AI, automation, visualization, Python, Java, and full-stack development." },
      { property: "og:title", content: "Tushar Thakur — Data × AI × Automation Portfolio" },
      { property: "og:description", content: "A connected digital notebook portfolio across Data Science, AI automation, visualization, and software development." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PortfolioShell>
      <SectionNavigation />
      <main className="relative overflow-hidden">
        <ContinuityPath />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <TechStack />
        <ProjectsPreview />
        <ServicesSection />
        <EducationExperienceSection />
        <JourneyTimeline />
        <CertificationsPreview />
        <BlogsPreview />
        <LabSection />
        <ContactSection />
      </main>
    </PortfolioShell>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative z-10 min-h-screen px-5 pb-20 pt-32 md:px-8 lg:pt-40">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="relative">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-signal/30 bg-signal/10 px-4 py-2 text-sm font-semibold text-signal">
            <span className="size-2 rounded-full bg-signal pulse" />
            Available for Freelance / Internship / Collaboration
          </div>
          <p className="font-sketch text-4xl text-sketch">currently exploring</p>
          <h1 className="mt-2 font-display text-[clamp(4.5rem,9vw,9.5rem)] font-bold leading-[0.78] tracking-normal text-foreground">
            TUSHAR<br />THAKUR
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-normal text-muted-foreground">
            <span>Data × AI × Automation</span>
            <span className="h-px w-16 bg-border" />
            <span>MCA — Data Science</span>
          </div>
          <h2 className="mt-8 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-normal md:text-5xl">
            Turning Data, AI & Automation into useful digital experiences.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            MCA Data Science student exploring intelligent systems, automation, data visualization and full-stack development while building solutions for real-world problems.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/80">
            I build with data, AI, automation, and code — turning ideas into intelligent digital experiences.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="signal" size="lg" asChild data-cursor="EXPLORE">
              <a href="#projects">Explore My Work <ArrowRight /></a>
            </Button>
            <ResumePreview className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card/85 px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:border-signal hover:text-signal" label="Preview Resume" />
            <Button variant="glass" size="lg" asChild><a href={contactInfo.resume} download="Tushar-Thakur-Resume.pdf"><Download /> Download PDF</a></Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {heroSkills.map((skill) => (
              <span key={skill} className="glass-control rounded-full px-4 py-2 font-mono text-xs font-semibold text-foreground magnetic" data-cursor="SKILL">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <ProfileComposition />
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-glass px-4 py-2 text-sm text-muted-foreground backdrop-blur md:flex" data-cursor="SCROLL">
        begin scroll <ArrowDown className="size-4" />
      </a>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative z-10 px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <aside className="lg:sticky lg:top-32">
          <p className="font-mono text-sm text-muted-foreground">02 / ABOUT</p>
          <p className="mt-4 font-sketch text-4xl text-signal">build → test → learn</p>
          <div className="mt-10 pb-10 lg:mt-16"><DataSurface /></div>
        </aside>
        <div className="relative rounded-[2rem] border border-border bg-card/75 p-6 shadow-pencil backdrop-blur md:p-10">
          <svg className="absolute -left-10 top-8 hidden h-32 w-32 text-sketch lg:block" viewBox="0 0 140 120" fill="none" aria-hidden="true">
            <path d="M127 14 C82 8 26 26 20 62 C15 95 58 104 92 89" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M91 89 L81 78 M91 89 L77 96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <p className="font-sketch text-3xl text-signal">editorial notebook</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-normal md:text-6xl">A curious builder at the intersection of data and useful software.</h2>
          <div className="mt-8 grid gap-6 text-lg leading-8 text-muted-foreground">
            <p>Tushar Thakur is currently pursuing a Master of Computer Applications with a specialization in Data Science. He enjoys working at the intersection of data, artificial intelligence, automation and software development.</p>
            <p>He is particularly interested in finding practical ways to use technology to simplify tasks, analyze information and create useful digital experiences.</p>
            <p>Alongside his studies, he is actively exploring freelancing, internships, hackathons, automation projects and opportunities in the Data Science ecosystem.</p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((interest, index) => (
              <span key={interest} className="relative rounded-2xl border border-border bg-background/45 px-5 py-4 font-display font-semibold magnetic" data-cursor="OPEN">
                <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span><br />{interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-sm text-muted-foreground">03 / SKILLS</p>
          <h2 className="mt-4 font-display text-5xl font-bold leading-tight tracking-normal md:text-7xl">Skill network, not progress bars.</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">The strongest areas form the main graph, with related tools revealed as connected notes.</p>
        </div>

        <div className="relative mt-14 min-h-[720px] rounded-[2rem] border border-border bg-glass/60 p-5 backdrop-blur md:p-10">
          <svg className="absolute inset-0 h-full w-full text-border" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M50 50 L25 17 M50 50 L75 17 M50 50 L12 50 M50 50 L88 50 M50 50 L25 82 M50 50 L75 82" stroke="currentColor" strokeWidth="0.35" strokeDasharray="1.8 2.1" />
          </svg>
          <div className="relative z-10 grid min-h-[640px] gap-5 md:grid-cols-5 md:grid-rows-3">
            <div className="order-first grid place-items-center rounded-full border border-signal/40 bg-signal/10 p-8 text-center shadow-pencil md:col-start-3 md:row-start-2">
              <div>
                <p className="font-sketch text-3xl text-signal">center node</p>
                <h3 className="font-display text-3xl font-bold tracking-normal">Tushar</h3>
              </div>
            </div>
            {skillNodes.map((node) => (
              <div key={node.title} className={`group rounded-[1.5rem] border border-border bg-card/85 p-5 shadow-pencil magnetic ${node.className}`} data-cursor="EXPLORE">
                <h3 className="font-display text-2xl font-bold tracking-normal">{node.title}</h3>
                <div className="mt-5 grid gap-2 opacity-80 transition group-hover:opacity-100">
                  {node.tools.map((tool) => <span key={tool} className="rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-xs text-muted-foreground">{tool}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 overflow-hidden rounded-full border border-border bg-glass py-4 backdrop-blur">
          <div className="flex w-max gap-3" style={{ animation: "marquee 30s linear infinite" }}>
            {[...secondarySkills, ...secondarySkills].map((skill, index) => <span key={`${skill}-${index}`} className="px-5 font-mono text-xs text-muted-foreground">{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsPreview() {
  return (
    <section id="projects" className="relative z-10 px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sketch text-3xl text-signal">selected work</p>
            <h2 className="mt-3 font-display text-5xl font-bold tracking-normal md:text-7xl">Featured work, built with purpose.</h2>
          </div>
          <Button variant="glass" size="lg" asChild data-cursor="OPEN">
            <Link to="/projects">Open Projects Page <ArrowUpRight /></Link>
          </Button>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.slice(0, 2).map((project, index) => (
            <article key={project.slug} className="group relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-pencil magnetic" data-cursor="VIEW CASE STUDY">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--graphite)_7%,transparent)_1px,transparent_1px),linear-gradient(color-mix(in_oklab,var(--graphite)_7%,transparent)_1px,transparent_1px)] bg-[size:32px_32px] opacity-60" />
              <div className="relative z-10">
                <span className="font-mono text-xs text-muted-foreground">FEATURED PROJECT 0{index + 1}</span>
                <h3 className="mt-4 font-display text-4xl font-bold tracking-normal">{project.title}</h3>
                <p className="mt-2 text-sm font-semibold uppercase text-signal">{project.label}</p>
                <p className="mt-6 leading-7 text-muted-foreground">{project.description}</p>
                <FlowDiagram steps={project.flow} />
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => <span key={tag} className="glass-control rounded-full px-3 py-1 font-mono text-[11px]">{tag}</span>)}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button variant="glass" asChild><a href={`/blogs?blog=${project.blogSlug}`}>Read Case Study <ArrowUpRight className="size-4" /></a></Button>
                  <Button variant="blueprint" asChild><Link to="/projects">Explore Projects</Link></Button>
                  <Button variant="ghost" asChild data-cursor="OPEN"><a href={project.github} target="_blank" rel="noopener noreferrer"><Github /> View GitHub</a></Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowDiagram({ steps, title }: { steps: readonly string[]; title?: string }) {
  return (
    <div className="mt-7 rounded-2xl border border-border bg-secondary/50 p-4 sm:p-5">
      {title ? <p className="mb-3 font-sketch text-2xl text-signal">{title}</p> : null}
      <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">How it works / 4 stages</p>
      {/* Wrap to a compact responsive grid rather than forcing a horizontal scrollbar. */}
      <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {steps.map((step, index) => (
          <li key={`${step}-${index}`} className="relative flex min-h-24 flex-col justify-between rounded-xl border border-border bg-paper/70 p-3 shadow-sm">
            <span className="font-mono text-[10px] text-signal">0{index + 1}</span>
            <span className="mt-3 text-balance text-xs font-semibold leading-5 text-foreground">{step}</span>
            {index < steps.length - 1 && <ArrowRight aria-hidden="true" className="absolute -right-2 top-1/2 z-10 size-4 -translate-y-1/2 rounded-full bg-card p-0.5 text-signal" />}
          </li>
        ))}
      </ol>
    </div>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="relative z-10 px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-sm text-muted-foreground">05 / SERVICES</p>
        <h2 className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-normal md:text-7xl">What Can I Build For You?</h2>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="rounded-[1.5rem] border border-border bg-card/80 p-6 shadow-pencil magnetic" data-cursor="SOLVE">
              <span className="font-mono text-xs text-muted-foreground">SERVICE 0{index + 1}</span>
              <h3 className="mt-5 font-display text-2xl font-bold tracking-normal">{service.title}</h3>
              <p className="mt-4 leading-7 text-muted-foreground">{service.copy}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tools.map((tool) => <span key={tool} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">{tool}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationExperienceSection() {
  return (
    <section id="education" className="relative z-10 px-5 py-24 text-primary-foreground md:px-8">
      <div className="absolute inset-0 -z-10 bg-graphite" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,color-mix(in_oklab,var(--signal)_26%,transparent),transparent_28rem),radial-gradient(circle_at_75%_65%,color-mix(in_oklab,var(--data-cyan)_20%,transparent),transparent_32rem)]" />
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <p className="font-mono text-sm text-primary-foreground/60">06 / EDUCATION</p>
          <h2 className="mt-4 font-display text-5xl font-bold tracking-normal md:text-7xl">Timeline of study and exploration.</h2>
          <div className="mt-12 border-l border-primary-foreground/25 pl-8">
            {education.map((item) => (
              <article key={item.title} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[41px] top-1 size-4 rounded-full border-2 border-signal bg-graphite shadow-[0_0_0_8px_color-mix(in_oklab,var(--signal)_18%,transparent)]" />
                <p className="font-sketch text-3xl text-signal">{item.status}</p>
                <h3 className="mt-2 font-display text-3xl font-bold tracking-normal">{item.title}</h3>
                <p className="mt-2 font-semibold text-data-cyan">{item.place}</p>
                <p className="mt-3 leading-7 text-primary-foreground/70">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-sm text-primary-foreground/60">EXPERIENCE & EXPLORATION</p>
          <div className="mt-10 grid gap-5">
            {explorations.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-primary-foreground/15 bg-primary-foreground/8 p-6 backdrop-blur magnetic" data-cursor="OPEN">
                <p className="font-sketch text-2xl text-data-cyan">{item.label}</p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-normal">{item.title}</h3>
                <p className="mt-3 leading-7 text-primary-foreground/70">{item.copy}</p>
              </article>
            ))}
          </div>
          <Button className="mt-8" variant="signal" size="lg" asChild data-cursor="TALK">
            <a href="#contact">Have a problem I can help solve? <ArrowRight /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function CertificationsPreview() {
  return (
    <section id="certifications" className="relative z-10 px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sketch text-3xl text-signal">always learning ↗</p>
            <h2 className="mt-3 font-display text-5xl font-bold tracking-tight text-foreground md:text-7xl">Proof of learning.</h2>
            <p className="mt-5 max-w-2xl text-muted-foreground">A selection of courses, technical training and competitions. Explore the full archive for leadership and community milestones.</p>
          </div>
          <Link to="/certifications" className="inline-flex items-center gap-2 self-start rounded-xl border border-border bg-card/70 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-signal hover:text-signal">All certificates <ArrowUpRight size={16} /></Link>
        </div>
        <div className="mt-10"><CertificateGallery featuredOnly /></div>
      </div>
    </section>
  );
}

function BlogsPreview() {
  return (
    <section className="relative z-10 px-5 py-24 text-primary-foreground md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sketch text-3xl text-signal">From Project to Perspective</p>
            <h2 className="mt-3 font-display text-5xl font-bold tracking-normal">Stories behind the systems I build.</h2>
            <p className="mt-4 max-w-2xl text-primary-foreground/70">Explore practical case studies covering architecture, design decisions, challenges and lessons learned.</p>
          </div>
          <Button variant="glass" asChild><Link to="/blogs">View All 7 Blogs <ArrowRight className="ml-2 size-4" /></Link></Button>
        </div>
        <div className="mt-12"><BlogGallery limit={3} dark /></div>
      </div>
    </section>
  );
}

function LabSection() {
  return (
    <section className="relative z-10 px-5 py-24 text-primary-foreground md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-sm text-primary-foreground/60">LAB / EXPERIMENTS</p>
        <h2 className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-normal md:text-7xl">Small studies, automation sparks and data sketches.</h2>
        <div className="mt-12"><LabStrip /></div>
      </div>
    </section>
  );
}

function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const opportunity = String(data.get("opportunity") || "Other");
  const message = String(data.get("message") || "").trim();
  const subject = `Portfolio inquiry: ${opportunity}`;
  const body = `Name: ${name}\nEmail: ${email}\nOpportunity: ${opportunity}\n\n${message}`;
  // Open Gmail in a new browser tab, using the visitor's own Gmail account.
  window.open(gmailComposeUrl(subject, body), "_blank", "noopener,noreferrer");
}

function ContactSection() {
  return (
    <section id="contact" className="relative z-10 px-5 py-24 text-primary-foreground md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-sketch text-4xl text-data-cyan">final node</p>
          <h2 className="mt-4 font-display text-5xl font-bold leading-tight tracking-normal md:text-7xl">Have an idea? Let's build something useful.</h2>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/70">
            I'm currently open to internships, freelance work, collaborations and interesting opportunities involving Data, AI, Automation or Development.
          </p>
          <div className="mt-10 grid gap-3 font-mono text-sm text-primary-foreground/70">
            <p>Email · <a href={gmailComposeHref} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">{contactInfo.email}</a></p>
            <p>Phone · <a href={contactInfo.phoneHref} className="underline-offset-4 hover:underline">{contactInfo.phoneDisplay}</a></p>
            <p>LinkedIn · <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="break-all underline-offset-4 hover:underline">{contactInfo.linkedin}</a></p>
            <p>GitHub · <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="break-all underline-offset-4 hover:underline">{contactInfo.github}</a></p>
            <p id="resume">Resume · <a href={contactInfo.resume} download="Tushar-Thakur-Resume.pdf" className="underline-offset-4 hover:underline">Download PDF</a></p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="signal" asChild data-cursor="SEND"><a href={gmailComposeHref} target="_blank" rel="noopener noreferrer"><Mail /> Send an Email</a></Button>
            <Button className="!border-[#75d7e4] !bg-[#123a45] !text-white hover:!bg-[#1c5661]" asChild data-cursor="OPEN"><a href={contactInfo.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a></Button>
            <Button variant="glass" asChild data-cursor="OPEN"><a href={contactInfo.github} target="_blank" rel="noreferrer"><Github /> GitHub</a></Button>
            <Button variant="glass" asChild data-cursor="DOWNLOAD"><a href={contactInfo.resume} download="Tushar-Thakur-Resume.pdf"><Download /> Download Resume</a></Button>
          </div>
        </div>
        <form onSubmit={handleContactSubmit} className="rounded-[2rem] border border-white/20 bg-[#eeeae4] p-6 text-[#15191c] shadow-xl md:p-8" aria-label="Contact form">
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-semibold">Name<input className="rounded-2xl border border-[#bdb9b3] bg-white/80 px-4 py-3 text-[#15191c] placeholder:text-[#666] outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" name="name" required /></label>
            <label className="grid gap-2 text-sm font-semibold">Email<input className="rounded-2xl border border-[#bdb9b3] bg-white/80 px-4 py-3 text-[#15191c] placeholder:text-[#666] outline-none focus:ring-2 focus:ring-ring" placeholder="you@example.com" type="email" name="email" required /></label>
            <label className="grid gap-2 text-sm font-semibold">Project / Opportunity Type<select className="rounded-2xl border border-[#bdb9b3] bg-white px-4 py-3 text-[#15191c] placeholder:text-[#666] outline-none focus:ring-2 focus:ring-ring" defaultValue="Freelance Project" name="opportunity"><option>Freelance Project</option><option>Internship</option><option>Collaboration</option><option>Job Opportunity</option><option>Other</option></select></label>
            <label className="grid gap-2 text-sm font-semibold">Message<textarea className="min-h-36 rounded-2xl border border-[#bdb9b3] bg-white/80 px-4 py-3 text-[#15191c] placeholder:text-[#666] outline-none focus:ring-2 focus:ring-ring" placeholder="Tell me what you want to build" name="message" required /></label>
            <Button type="submit" variant="signal" size="lg"><Send /> Compose in Gmail</Button>
            <p className="text-xs text-[#555]">Opens a Gmail draft in a new tab. You'll review and send it from your own account.</p>
          </div>
        </form>
      </div>

    </section>
  );
}
