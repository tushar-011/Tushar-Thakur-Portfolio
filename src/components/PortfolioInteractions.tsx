import { useEffect, useState } from "react";
import { scrollSections } from "@/lib/portfolio-data";

/** Compact section rail: keyboard-accessible buttons, hover/focus labels, and dark-surface contrast. */
export function SectionNavigation() {
  const [activeId, setActiveId] = useState<string>(scrollSections[0].id);
  const [darkSurface, setDarkSurface] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const center = window.innerHeight * 0.46;
      let current = scrollSections[0].id;
      for (const section of scrollSections) {
        const target = document.getElementById(section.id);
        if (target && target.getBoundingClientRect().top <= center) current = section.id;
      }
      setActiveId(current);

      // Sample the element immediately behind the rail, not just the global theme.
      const railX = window.innerWidth - 25;
      const sample = document.elementFromPoint(railX, window.innerHeight / 2);
      let node: Element | null = sample;
      let isDark = document.documentElement.classList.contains("dark");
      while (node && node !== document.documentElement) {
        const bg = getComputedStyle(node).backgroundColor.match(/rgba?\(([^)]+)\)/);
        if (bg) {
          const parts = bg[1].split(/[, ]+/).map(Number);
          if (parts.length >= 3 && (parts[3] === undefined || parts[3] > 0.88)) {
            const [r, g, b] = parts;
            isDark = (0.2126 * r + 0.7152 * g + 0.0722 * b) < 125;
            break;
          }
        }
        node = node.parentElement;
      }
      setDarkSurface(isDark);
    };
    const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <nav
      aria-label="Jump to portfolio section"
      className={`section-rail group fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 rounded-2xl py-3 pl-3 pr-2 backdrop-blur-md lg:block ${darkSurface ? "section-rail--light" : "section-rail--dark"}`}
    >
      <div className="flex flex-col items-end gap-1">
        {scrollSections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-label={`Go to ${section.label}`}
            aria-current={activeId === section.id ? "location" : undefined}
            className={`section-rail__link flex min-h-7 items-center justify-end gap-3 rounded-lg px-2 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 ${activeId === section.id ? "is-active" : ""}`}
          >
            <span className="section-rail__label whitespace-nowrap font-mono text-[11px] font-semibold tracking-wide">{section.label}</span>
            <span className="section-rail__tick block h-[2px] w-4 rounded-full transition-all" />
          </a>
        ))}
      </div>
    </nav>
  );
}

export function ContinuityPath() {
  return (
    <svg className="pointer-events-none absolute left-1/2 top-24 z-0 hidden h-[5600px] w-[min(86vw,1050px)] -translate-x-1/2 text-foreground/35 lg:block" viewBox="0 0 1000 5600" fill="none" aria-hidden="true">
      <path className="draw-path" pathLength="1" d="M510 0 C650 220 352 430 505 670 C640 880 850 940 660 1210 C470 1480 190 1520 330 1840 C455 2128 780 2070 730 2420 C680 2780 250 2810 325 3190 C400 3590 760 3500 700 3910 C640 4320 290 4290 370 4705 C430 5010 610 5200 510 5600" stroke="currentColor" strokeWidth="2" strokeDasharray="9 11" />
      {Array.from({ length: 18 }, (_, index) => (
        <circle key={index} cx={index % 2 === 0 ? 510 + (index % 5) * 43 : 500 - (index % 4) * 58} cy={180 + index * 295} r={index % 3 === 0 ? 6 : 4} className="fill-data-cyan/60" />
      ))}
    </svg>
  );
}
