import { useEffect, useRef, useState } from "react";
import { ImagePlus, Trash2 } from "lucide-react";
import { futureProjectSlots } from "@/lib/portfolio-data";

const STORAGE_KEY = "tushar-about-image";

/** Large clean hero portrait. Put your real photo at public/profile.jpg. */
export function ProfileComposition() {
  const [missing, setMissing] = useState(false);
  return (
    <div className="relative mx-auto w-full max-w-[480px] lg:ml-auto" aria-label="Tushar Thakur portrait">
      <div className="absolute -inset-3 rounded-[2.5rem] border border-foreground/15" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-secondary shadow-pencil">
        {!missing ? (
          <img src="/images/main_me.webp" alt="Portrait of Tushar Thakur" className="h-full w-full object-cover object-top" onError={() => setMissing(true)} />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4 bg-[linear-gradient(135deg,var(--secondary),var(--background))] text-center">
            <span className="font-display text-[clamp(5rem,12vw,9rem)] font-black tracking-tighter text-foreground/20">TT</span>
            <span className="px-6 font-mono text-xs text-muted-foreground">Add your photo as public/profile.jpg</span>
          </div>
        )}
      </div>
      <div className="absolute -bottom-4 right-6 rounded-full border border-border bg-card px-5 py-2 font-mono text-xs font-semibold shadow-pencil">Tushar Thakur</div>
    </div>
  );
}

/** About-section animated media, separate from the hero portrait. GIF/WebP works. */
export function DataSurface() {
  const [uploaded, setUploaded] = useState<string | null>(null);
  const [staticAvailable, setStaticAvailable] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try { setUploaded(localStorage.getItem(STORAGE_KEY)); } catch { /* storage disabled */ }
  }, []);

  const handleFile = (file?: File) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      const value = String(reader.result);
      setUploaded(value);
      try { localStorage.setItem(STORAGE_KEY, value); } catch { /* still visible until refresh */ }
    };
    reader.readAsDataURL(file);
  };

  const src = uploaded || (staticAvailable ? "/images/secondary_me.webp" : null);
  return (
    <div className="about-visual relative mx-auto w-full max-w-[470px]">
      <div className="absolute -inset-3 rounded-[2.5rem] border border-signal/20" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card shadow-pencil">
        {src ? (
          <img src={src} alt="Animated illustration of Tushar Thakur" className="h-full w-full object-cover" onError={() => { if (!uploaded) setStaticAvailable(false); }} />
        ) : (
          <button type="button" onClick={() => inputRef.current?.click()} onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); handleFile(event.dataTransfer.files?.[0]); }} className="flex h-full w-full flex-col items-center justify-center gap-5 bg-[radial-gradient(circle_at_center,var(--secondary),var(--card))] px-8 text-center">
            <span className="grid size-20 place-items-center rounded-full border border-signal/30 bg-signal/10"><ImagePlus className="size-9 text-signal" /></span>
            <span className="font-display text-2xl font-semibold">Your animated portrait</span>
            <span className="font-mono text-xs leading-6 text-muted-foreground">Place a GIF or animated WebP at public/images/secondary_me.webp, or click to upload temporarily.</span>
          </button>
        )}
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/10" />
      </div>
    </div>
  );
}

export function LabStrip() {
  return (
    <div className="overflow-hidden border-y border-border py-4">
      <div className="flex w-max gap-4" style={{ animation: "marquee 26s linear infinite" }}>
        {[...futureProjectSlots, ...futureProjectSlots].map((slot, index) => (
          <span key={`${slot}-${index}`} className="rounded-full border border-border bg-glass px-5 py-2 font-mono text-xs text-muted-foreground">{slot}</span>
        ))}
      </div>
    </div>
  );
}
