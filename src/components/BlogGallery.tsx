import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { ArrowDownToLine, ArrowUpRight, BookOpen, ExternalLink, X } from "lucide-react";
import { blogPosts, type BlogPost } from "@/lib/blog-data";

function Cover({ post }: { post: BlogPost }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-[1.2rem] border border-border bg-[#e9e5df]">
      {!failed && <img src={post.cover} alt={`${post.title} blog cover`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" onError={() => setFailed(true)} />}
      {failed && <div className="absolute inset-0 flex flex-col justify-between bg-[linear-gradient(135deg,#e8e4df,#c9d4d3)] p-6 text-[#18202a]">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Tushar Thakur / Case study</span>
        <span className="font-display text-4xl font-black leading-none md:text-5xl">{post.title}</span>
        <span className="font-mono text-xs">{post.category}</span>
      </div>}
      <span className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-black shadow"><BookOpen size={17} /></span>
    </div>
  );
}

function Preview({ post, onClose }: { post: BlogPost; onClose: () => void }) {
  useEffect(() => {
    const prior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = prior; window.removeEventListener("keydown", handleKey); };
  }, [onClose]);
  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-2 backdrop-blur-sm sm:p-5" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section role="dialog" aria-modal="true" aria-label={`Read ${post.title}`} className="flex h-[94dvh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-[#f3f1ed] text-[#171b20] shadow-2xl">
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-black/10 p-3 sm:p-4">
          <div className="min-w-0"><p className="truncate text-base font-bold sm:text-xl">{post.title}</p><p className="hidden text-xs text-slate-600 sm:block">{post.subtitle}</p></div>
          <div className="flex items-center gap-2">
            <a href={post.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-black/20 px-3 py-2 text-xs font-semibold hover:bg-white"><ExternalLink size={15} /> <span className="hidden sm:inline">Open PDF</span></a>
            <a href={post.pdf} download={`${post.title.replace(/\s+/g, '-')}-Blog.pdf`} className="inline-flex items-center gap-1.5 rounded-full bg-[#d63c3c] px-3 py-2 text-xs font-semibold text-white hover:bg-[#b72a2a]"><ArrowDownToLine size={15} /> Download</a>
            <button type="button" aria-label="Close preview" onClick={onClose} className="rounded-full border border-black/20 p-2 hover:bg-white"><X size={18} /></button>
          </div>
        </div>
        <iframe src={`${post.pdf}#toolbar=1&navpanes=0`} title={`${post.title} PDF document`} className="min-h-0 w-full flex-1 bg-white" />
        <p className="shrink-0 border-t border-black/10 px-4 py-2 text-center text-xs text-slate-600">If the preview does not load on your device, use Open PDF or Download.</p>
      </section>
    </div>,
    document.body,
  );
}

export function BlogGallery({ limit, dark = false }: { limit?: number; dark?: boolean }) {
  const [selected, setSelected] = useState<BlogPost | null>(null);
  // Deep links like /blogs?blog=career-compass open the matching PDF automatically.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const blogSlug = params.get("blog");
    if (blogSlug) {
      const matched = blogPosts.find((post) => post.slug === blogSlug);
      if (matched) setSelected(matched);
    }
  }, []);
  const posts = typeof limit === "number" ? blogPosts.slice(0, limit) : blogPosts;
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className={`group flex flex-col rounded-[1.6rem] border p-3 transition-transform hover:-translate-y-1 ${dark ? "border-white/20 bg-white/10 text-white" : "border-border bg-card text-foreground shadow-pencil"}`}>
            <button type="button" onClick={() => setSelected(post)} className="w-full text-left" aria-label={`Preview ${post.title}`}><Cover post={post} /></button>
            <div className="flex flex-1 flex-col p-3">
              <p className={`font-mono text-xs ${dark ? "text-white/60" : "text-muted-foreground"}`}>{post.category}</p>
              <h3 className="mt-2 font-display text-2xl font-bold">{post.title}</h3>
              <p className="mt-1 text-sm font-semibold opacity-90">{post.subtitle}</p>
              <p className={`mt-3 flex-1 text-sm leading-6 ${dark ? "text-white/75" : "text-muted-foreground"}`}>{post.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">{post.tags.slice(0, 3).map(tag => <span key={tag} className={`rounded-full border px-2 py-1 font-mono text-[10px] ${dark ? "border-white/25 text-white/70" : "border-border text-muted-foreground"}`}>{tag}</span>)}</div>
              <div className="mt-5 flex items-center gap-2">
                <button type="button" onClick={() => setSelected(post)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#d63c3c] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#bd2929]">Read blog <ArrowUpRight size={16} /></button>
                <a href={post.pdf} download={`${post.title.replace(/\s+/g, '-')}-Blog.pdf`} aria-label={`Download ${post.title} blog`} className={`rounded-full border p-2.5 ${dark ? "border-white/30 hover:bg-white/20" : "border-border hover:bg-secondary"}`}><ArrowDownToLine size={18} /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
      {selected && <Preview post={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
