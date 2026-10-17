import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUp, Download, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { ResumePreview } from "@/components/ResumePreview";
import { navItems } from "@/lib/portfolio-data";
import { contactInfo, gmailComposeHref } from "@/lib/contact-info";

function itemHref(item: (typeof navItems)[number]) {
  return item.hash ? `/#${item.hash}` : item.to;
}

export function PortfolioShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isNavigating = useRouterState({ select: (s) => s.isLoading });
  useEffect(() => {
    const update = () => setShowTop(window.scrollY > 650);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="min-h-screen notebook-canvas paper-texture text-foreground">
      {isNavigating && <div className="portfolio-loading-bar" role="progressbar" aria-label="Loading page" />}
      <header className="fixed left-0 right-0 top-4 z-50 px-4">
        <nav className="glass-control mx-auto flex max-w-7xl items-center justify-between rounded-full px-3 py-2 text-sm">
          <Link to="/" className="group flex items-center gap-3 rounded-full px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <img src="/brand-mark.svg" width="40" height="40" alt="Tushar Thakur monogram" className="size-10 shrink-0 rounded-full transition-transform duration-300 group-hover:-rotate-6" />
            <span className="hidden font-display font-semibold tracking-normal sm:inline">Tushar Thakur</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) =>
              item.hash ? (
                <a key={`${item.label}-${item.hash}`} href={itemHref(item)} className="rounded-full px-3 py-2 text-muted-foreground transition hover:bg-glass hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.to} activeOptions={{ exact: true }} activeProps={{ className: "text-signal bg-signal/10" }} inactiveProps={{ className: "text-muted-foreground" }} className="rounded-full px-3 py-2 transition hover:bg-glass hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {item.label}
                </Link>
              ),
            )}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" size="icon" asChild aria-label="GitHub profile">
              <a href={contactInfo.github} target="_blank" rel="noreferrer"><Github /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="LinkedIn profile">
              <a href={contactInfo.linkedin} target="_blank" rel="noreferrer"><Linkedin /></a>
            </Button>
            <ResumePreview className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-border bg-card/85 px-4 py-2 font-semibold hover:text-signal" label="Resume" />
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X /> : <Menu />}
          </Button>
        </nav>

        {open ? (
          <div className="glass-panel mx-auto mt-3 grid max-w-md gap-1 rounded-2xl p-3 lg:hidden">
            {navItems.map((item) =>
              item.hash ? (
                <a key={`${item.label}-${item.hash}`} href={itemHref(item)} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-medium text-foreground hover:bg-accent/10">
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.to} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-medium text-foreground hover:bg-accent/10">
                  {item.label}
                </Link>
              ),
            )}
            <div className="flex flex-wrap gap-2 border-t border-border pt-3"><ResumePreview className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-3 font-semibold" label="Preview Resume" /><a className="rounded-xl border border-border px-4 py-3 font-semibold" href={contactInfo.resume} download="Tushar-Thakur-Resume.pdf">Download PDF</a></div>
          </div>
        ) : null}
      </header>
      <div key={pathname} className="portfolio-route-enter min-w-0 flex-1">{children}</div>
      <footer className="portfolio-site-footer relative z-10 px-5 pb-9 pt-16 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/15 bg-[#12171b] px-6 py-9 text-white shadow-xl md:px-10">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <Link to="/" className="inline-flex items-center gap-3 font-display text-xl font-bold"><img src="/brand-mark.svg" alt="" width="44" height="44" className="size-11" /> Tushar Thakur</Link>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">Building useful digital experiences at the intersection of Data, AI, Automation, and Software.</p>
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-[#7dd8df]">Learn → Build → Improve</p>
            </div>
            <div>
              <h2 className="mb-4 font-mono text-xs uppercase tracking-[.22em] text-white/55">Explore</h2>
              <div className="grid grid-cols-2 gap-x-3 gap-y-3 text-sm">
                {navItems.map((item) => <a key={item.label} href={itemHref(item)} className="w-fit text-white/80 transition hover:text-[#7dd8df]">{item.label}</a>)}
              </div>
            </div>
            <div>
              <h2 className="mb-4 font-mono text-xs uppercase tracking-[.22em] text-white/55">Connect</h2>
              <div className="flex flex-wrap gap-2">
                <a aria-label="GitHub" href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="portfolio-footer-icon"><Github className="size-5" /></a>
                <a aria-label="LinkedIn" href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="portfolio-footer-icon"><Linkedin className="size-5" /></a>
                <a aria-label="Compose email" href={gmailComposeHref} target="_blank" rel="noopener noreferrer" className="portfolio-footer-icon"><Mail className="size-5" /></a>
                <a href={contactInfo.resume} download="Tushar-Thakur-Resume.pdf" className="portfolio-footer-icon gap-2 px-4 text-xs"><Download className="size-4" /> Resume</a>
              </div>
              <a className="mt-5 inline-block break-all text-sm text-white/65 hover:text-white" href={gmailComposeHref} target="_blank" rel="noopener noreferrer">{contactInfo.email}</a>
            </div>
          </div>
          <div className="mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/50"><span>© {new Date().getFullYear()} Tushar Thakur. All rights reserved.</span><span>Designed with curiosity · Built with purpose</span></div>
        </div>
      </footer>
      <button type="button" aria-label="Back to top" title="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })} className={`portfolio-back-top ${showTop ? 'is-visible' : ''}`} tabIndex={showTop ? 0 : -1}><ArrowUp className="size-5" /></button>
    </div>
  );
}