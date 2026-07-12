type Project = {
  name: string;
  subdomain: string;
  description: string;
  stack: string[];
  status: "live" | "in progress";
};

const projects: Project[] = [
  {
    name: "Project one",
    subdomain: "one.mohl.app",
    description: "Short one-liner about what this demonstrates.",
    stack: ["React", "API Gateway", "DynamoDB"],
    status: "in progress",
  },
  {
    name: "Project two",
    subdomain: "two.mohl.app",
    description: "Short one-liner about what this demonstrates.",
    stack: ["Lambda", "Postgres"],
    status: "in progress",
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/mohl-app" },
  { label: "Status", href: "https://status.mohl.app" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-neutral-900 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-8">
        <a
          href="/"
          className="flex items-center gap-3"
          aria-label="mohl.app home"
        >
          <span className="text-lg font-semibold tracking-tight">mohl.app</span>
        </a>
        <nav aria-label="External links" className="flex gap-5 text-sm">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-neutral-600 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-neutral-400"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main" className="mx-auto max-w-3xl px-6 pb-24">
        <section className="py-16">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Digging into full-stack development.
          </h1>
          <p className="mt-4 max-w-prose text-lg text-neutral-600 dark:text-neutral-400">
            A portfolio of self-contained projects, each living at its own
            subdomain and built end to end — UX, APIs, data, infra, and the
            observability to prove it works.
          </p>
        </section>

        <section aria-labelledby="projects-heading">
          <h2
            id="projects-heading"
            className="text-sm font-medium uppercase tracking-wide text-neutral-500"
          >
            Projects
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <li key={p.subdomain}>
                <a
                  href={`https://${p.subdomain}`}
                  className="group block h-full rounded-xl border border-neutral-200 p-5 transition-colors hover:border-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-800 dark:hover:border-neutral-600"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-medium group-hover:underline underline-offset-4">
                      {p.name}
                    </h3>
                    <span className="text-xs text-neutral-500">{p.status}</span>
                  </div>
                  <p className="mt-1 font-mono text-xs text-neutral-500">
                    {p.subdomain}
                  </p>
                  <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                    {p.description}
                  </p>
                  <ul
                    className="mt-4 flex flex-wrap gap-2"
                    aria-label="Tech stack"
                  >
                    {p.stack.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-neutral-200 px-2 py-0.5 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-8 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} mohl.app</p>
        </div>
      </footer>
    </div>
  );
}
