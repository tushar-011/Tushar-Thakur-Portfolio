import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, Award, BookOpen, HeartHandshake, Trophy } from "lucide-react";
import { CertificateGallery } from "@/components/CertificateGallery";
import { PortfolioShell } from "@/components/PortfolioShell";
import { certificates } from "@/lib/certification-data";

export const Route = createFileRoute("/certifications")({
  head: () => ({ meta: [
    { title: "Certifications & Achievements — Tushar Thakur" },
    { name: "description", content: "Explore Tushar Thakur's learning, technical credentials, competitions, leadership, and community contributions." },
  ] }),
  component: CertificationsPage,
});

const groups = [
  { name: "Technical", icon: BookOpen },
  { name: "Competitions", icon: Trophy },
  { name: "Leadership", icon: Award },
  { name: "Social Impact", icon: HeartHandshake },
] as const;

function CertificationsPage() {
  return (
    <PortfolioShell>
      <main className="relative min-h-screen overflow-hidden px-5 pb-28 pt-32 text-foreground md:px-8">
        <div className="pointer-events-none absolute left-[-10%] top-[200px] size-[450px] rounded-full bg-signal/5 blur-[110px]" aria-hidden="true" />
        <section className="relative mx-auto grid max-w-7xl gap-10 pb-14 pt-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="font-sketch text-3xl text-signal">collected along the way ↗</p>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">04 / certifications & achievements</p>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(3.6rem,7vw,7rem)] font-bold leading-[0.95] tracking-tight">
              Proof of <span className="text-signal">learning.</span>
            </h1>
          </div>
          <div className="pb-2">
            <p className="max-w-lg text-lg leading-8 text-muted-foreground">
              From AI and data to competitions, leadership and community work — a growing collection of experiences beyond the code.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal">
              Explore the archive <ArrowDownRight size={17} />
            </div>
          </div>
        </section>

        <section className="relative mx-auto mb-12 grid max-w-7xl gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Credential categories">
          {groups.map(({ name, icon: Icon }, index) => (
            <div key={name} className="flex items-center gap-4 rounded-[22px] border border-border bg-card/70 p-5 backdrop-blur-sm">
              <span className="grid size-11 place-items-center rounded-xl border border-border text-signal"><Icon size={21} /></span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">0{index + 1} / {certificates.filter((item) => item.category === name).length} records</p>
                <h2 className="mt-1 font-display text-base font-bold">{name}</h2>
              </div>
            </div>
          ))}
        </section>

        <section className="relative mx-auto max-w-7xl" aria-label="Certificate collection">
          <div className="mb-8 flex items-end justify-between gap-5 border-b border-border pb-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal">The archive / {certificates.length} records</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Credentials & milestones.</h2>
            </div>
            <span className="hidden font-sketch text-2xl text-signal sm:block">learn → build → grow</span>
          </div>
          <CertificateGallery />
        </section>
      </main>
    </PortfolioShell>
  );
}
