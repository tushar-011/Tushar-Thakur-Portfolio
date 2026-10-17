import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { Award, ArrowUpRight, Download, ExternalLink, FileWarning, ShieldCheck, X } from "lucide-react";
import {
  certificateCategories,
  certificates,
  type Certificate,
  type CertificateCategory,
} from "@/lib/certification-data";

type Filter = "All" | CertificateCategory;

const categoryLabels: Record<CertificateCategory, string> = {
  Technical: "01 / Technical",
  Competitions: "02 / Competitions",
  Leadership: "03 / Leadership",
  "Social Impact": "04 / Social Impact",
};

export function CertificateGallery({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<Certificate | null>(null);
  const visible = certificates.filter(
    (certificate) => (!featuredOnly || certificate.featured) && (filter === "All" || certificate.category === filter),
  );

  return (
    <>
      {!featuredOnly && (
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter certificates">
            {certificateCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
                className={`rounded-full border px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal ${
                  filter === category
                    ? "border-signal bg-signal text-white"
                    : "border-border bg-card/70 text-foreground hover:border-signal hover:text-signal"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="font-mono text-xs text-muted-foreground">Showing {visible.length} / {certificates.length} records</p>
        </div>
      )}

      <div className={`grid gap-5 ${featuredOnly ? "sm:grid-cols-2 xl:grid-cols-4" : "sm:grid-cols-2 xl:grid-cols-3"}`}>
        {visible.map((certificate, index) => (
          <article
            key={certificate.id}
            className="group relative flex min-h-[275px] flex-col overflow-hidden rounded-[26px] border border-border bg-card/75 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:shadow-xl sm:p-7"
          >
            <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:28px_28px] text-border" aria-hidden="true" />
            <div className="relative flex items-start justify-between gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl border border-border bg-background/75 text-signal">
                <Award size={22} strokeWidth={1.8} />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {String(index + 1).padStart(2, "0")} / {certificate.category}
              </span>
            </div>
            <div className="relative mt-7 flex-1">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-signal">
                {categoryLabels[certificate.category]}
              </p>
              <h3 className="font-display text-xl font-bold leading-snug tracking-tight text-foreground sm:text-[22px]">
                {certificate.title}
              </h3>
              {certificate.issuer && <p className="mt-3 text-sm leading-6 text-muted-foreground">{certificate.issuer}</p>}
            </div>
            <div className="relative mt-7 border-t border-border pt-4">
              <div className="mb-4 flex items-center justify-between gap-2 text-xs text-muted-foreground">
                {certificate.date && <span>Issued {certificate.date}</span>}
                {certificate.verifyUrl && (
                  <span className="inline-flex items-center gap-1 text-emerald-700"><ShieldCheck size={13} /> Verification link</span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setActive(certificate)}
                className="inline-flex w-full items-center justify-between rounded-xl border border-border bg-background/70 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal"
              >
                View certificate <ArrowUpRight size={17} />
              </button>
            </div>
          </article>
        ))}
      </div>
      {visible.length === 0 && <p className="rounded-2xl border border-border bg-card p-8 text-center text-muted-foreground">No certificates found in this category.</p>}
      {active && <CertificateModal certificate={active} onClose={() => setActive(null)} />}
    </>
  );
}

function CertificateModal({ certificate, onClose }: { certificate: Certificate; onClose: () => void }) {
  const closeButton = useRef<HTMLButtonElement>(null);
  const [broken, setBroken] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setBroken(false);
    setChecking(true);
    fetch(certificate.file, { method: "HEAD", signal: controller.signal })
      .then((response) => {
        if (!response.ok || !response.headers.get("content-type")?.toLowerCase().includes("pdf")) {
          setBroken(true);
        }
      })
      .catch((error) => { if (error?.name !== "AbortError") setBroken(true); })
      .finally(() => { if (!controller.signal.aborted) setChecking(false); });
    return () => controller.abort();
  }, [certificate.file]);
  const path = certificate.file.split("?")[0].toLowerCase();
  const isPdf = path.endsWith(".pdf");
  const isImage = /\.(png|jpe?g|webp|gif|avif)$/.test(path);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <div role="dialog" aria-modal="true" aria-label={`Preview ${certificate.title}`} className="flex h-[min(92dvh,880px)] w-full max-w-5xl flex-col overflow-hidden rounded-[24px] border border-border bg-background text-foreground shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-border bg-card p-4 sm:p-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">Certificate / {certificate.category}</p>
            <h2 className="mt-2 font-display text-lg font-bold sm:text-2xl">{certificate.title}</h2>
            {certificate.issuer && <p className="mt-1 text-sm text-muted-foreground">{certificate.issuer}</p>}
          </div>
          <button ref={closeButton} type="button" onClick={onClose} aria-label="Close certificate preview" className="rounded-full border border-border p-2 transition hover:border-signal hover:text-signal"><X size={19} /></button>
        </div>
        <div className="min-h-0 flex-1 bg-[#e8e6e1]">
          {checking ? (
            <div className="flex h-full items-center justify-center text-[#202225]">Loading certificate…</div>
          ) : broken ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center text-[#202225]"><FileWarning size={36} /><p>Preview unavailable. Check this certificate's filename and extension in certification-data.ts.</p></div>
          ) : isPdf ? (
            <iframe title={`${certificate.title} document`} src={`${certificate.file}#toolbar=1&navpanes=0`} className="h-full w-full border-0" />
          ) : isImage ? (
            <div className="flex h-full items-center justify-center overflow-auto p-4"><img src={certificate.file} alt={`${certificate.title} certificate`} onError={() => setBroken(true)} className="max-h-full max-w-full object-contain" /></div>
          ) : (
            <div className="flex h-full items-center justify-center p-8 text-center text-[#202225]">This format can't be previewed here. Try opening the original file.</div>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-3 border-t border-border bg-card p-4 sm:p-5">
          <a href={certificate.file} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold hover:border-signal"><ExternalLink size={16} /> Open full size</a>
          <a href={certificate.file} download className="inline-flex items-center gap-2 rounded-xl bg-signal px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90"><Download size={16} /> Download</a>
          {certificate.verifyUrl && <a href={certificate.verifyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold"><ShieldCheck size={16} /> Verify</a>}
        </div>
      </div>
    </div>,
    document.body,
  );
}
