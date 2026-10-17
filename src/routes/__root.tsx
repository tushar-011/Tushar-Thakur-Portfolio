import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <main className="notebook-canvas paper-texture flex min-h-screen items-center justify-center px-5 py-16 text-foreground">
      <section className="w-full max-w-2xl rounded-[2rem] border border-border bg-card/90 p-7 text-center shadow-pencil sm:p-12">
        <p className="font-mono text-xs tracking-[.22em] text-signal">ERROR / PAGE NOT FOUND</p>
        <div aria-hidden="true" className="mt-5 font-display text-[clamp(6rem,22vw,13rem)] font-bold leading-none tracking-tighter">404<span className="text-signal">.</span></div>
        <p className="font-sketch text-3xl text-signal">wrong turn on the map ↗</p>
        <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">This page hasn't been built yet.</h1>
        <p className="mx-auto mt-4 max-w-md leading-7 text-muted-foreground">The link may have changed, or the address may be incorrect. There is plenty more to explore.</p>
        <nav className="mt-8 flex flex-wrap justify-center gap-3" aria-label="404 recovery navigation">
          <Link to="/" className="rounded-xl bg-foreground px-5 py-3 font-semibold text-background hover:opacity-85">Back to Home</Link>
          <Link to="/projects" className="rounded-xl border border-border bg-background/75 px-5 py-3 font-semibold">Explore Projects</Link>
          <Link to="/blogs" className="rounded-xl border border-border bg-background/75 px-5 py-3 font-semibold">Read Blogs</Link>
        </nav>
      </section>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tushar Thakur Portfolio" },
      { name: "description", content: "A connected digital notebook portfolio for Tushar Thakur, MCA Data Science student exploring Data, AI, automation, visualization, and software development." },
      { name: "author", content: "Tushar Thakur" },
      { property: "og:title", content: "Tushar Thakur Portfolio" },
      { property: "og:description", content: "Explore Tushar Thakur's Data Science, AI automation, visualization, and software development work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
