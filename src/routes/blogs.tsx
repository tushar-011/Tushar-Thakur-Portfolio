import { createFileRoute } from "@tanstack/react-router";
import { BlogGallery } from "@/components/BlogGallery";
import { PortfolioShell } from "@/components/PortfolioShell";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs & Project Case Studies — Tushar Thakur" },
      { name: "description", content: "Read and download Tushar Thakur's seven portfolio project case studies covering Python, R, AI, automation, Java and full-stack applications." },
      { property: "og:title", content: "Blogs & Project Case Studies — Tushar Thakur" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <PortfolioShell>
      <main className="px-5 pb-24 pt-32 md:px-8">
        <section className="mx-auto max-w-7xl py-14">
          <p className="font-sketch text-3xl text-signal">the stories behind my work</p>
          <h1 className="mt-4 max-w-5xl font-display text-5xl font-bold leading-none tracking-normal md:text-7xl">Projects, decisions and lessons learned.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">Seven hands-on portfolio case studies. Open any cover to read the original document in a preview, open it in your browser's PDF viewer, or download a copy.</p>
        </section>
        <section className="mx-auto max-w-7xl" aria-label="Project blogs"><BlogGallery /></section>
      </main>
    </PortfolioShell>
  );
}
