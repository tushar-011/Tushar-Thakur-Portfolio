import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Download, ExternalLink, FileText, X } from "lucide-react";
import { contactInfo } from "@/lib/contact-info";

type Props = { className?: string; label?: string; compact?: boolean };

export function ResumePreview({ className = "", label = "Preview Resume", compact = false }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (!open) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = oldOverflow; window.removeEventListener("keydown", onKey); };
  }, [open]);
  const url = contactInfo.resume;
  return <>
    <button type="button" onClick={() => { setFailed(false); setOpen(true); }} className={className}>
      <FileText className="size-4 shrink-0" aria-hidden="true" /> {label}
    </button>
    {mounted && open && createPortal(
      <div className="portfolio-modal-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
        <section className="portfolio-modal-frame" role="dialog" aria-modal="true" aria-labelledby="resume-preview-heading">
          <header className="portfolio-modal-header">
            <div><p className="font-mono text-[11px] tracking-widest text-signal">DOCUMENT / RESUME</p><h2 id="resume-preview-heading" className="mt-1 font-display text-2xl font-bold">Tushar Thakur — Resume</h2></div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close resume preview" className="rounded-full border border-border p-2 hover:bg-secondary"><X className="size-5" /></button>
          </header>
          {failed ? <div className="grid flex-1 place-items-center p-8 text-center"><p>Preview unavailable. Check that <code>public{url}</code> exists, or open the PDF separately.</p></div> :
            <iframe className="portfolio-modal-document" title="Tushar Thakur resume PDF" src={`${url}#toolbar=1`} onError={() => setFailed(true)} />}
          <footer className="portfolio-modal-actions">
            <a href={url} target="_blank" rel="noopener noreferrer" className="portfolio-modal-action"><ExternalLink className="size-4" /> Open PDF</a>
            <a href={url} download="Tushar-Thakur-Resume.pdf" className="portfolio-modal-action portfolio-modal-action--primary"><Download className="size-4" /> Download</a>
          </footer>
        </section>
      </div>, document.body)}
  </>;
}
