import Image from "next/image";
import {
  Boxes,
  Code2,
  FlaskConical,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Blog", href: "#blog" },
] as const;

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col">
      {/* Faint engineering grid */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgb(30_41_59/0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgb(30_41_59/0.12)_1px,transparent_1px)] bg-[length:4rem_4rem]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.06),transparent_55%)]"
      />

      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#0a0a0a]/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#"
            className="font-sans text-lg font-bold tracking-[0.2em] text-slate-100 sm:text-xl"
          >
            WHETSTONE
          </a>
          <nav
            aria-label="Primary"
            className="flex flex-wrap items-center justify-end gap-1 sm:gap-2"
          >
            {nav.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10 flex flex-1 flex-col">
        {/* Hero */}
        <section className="border-b border-slate-800/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-800 bg-slate-900/40 px-3 py-1 text-xs font-medium text-slate-400">
                <span className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
                Whetstone Software Consulting LLC
              </div>
              <div className="space-y-6">
                <h1 className="font-sans text-4xl font-bold leading-[1.05] tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
                  Precision Engineering for High-Stakes Software.
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-slate-400 sm:text-xl">
                  Whetstone Consulting partners with businesses to architect,
                  build, and scale production-grade web applications.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="#contact"
                  className={cn(buttonVariants({ size: "xl" }))}
                >
                  Start a Project
                </a>
                <a
                  href="#case-studies"
                  className={cn(buttonVariants({ variant: "outline", size: "xl" }))}
                >
                  View Case Studies
                </a>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none">
              <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/50 p-8 shadow-[0_0_0_1px_rgba(15,23,42,0.4)] sm:max-w-md lg:max-w-none">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_50%)]" />
                <Image
                  src="/globe.svg"
                  alt=""
                  width={400}
                  height={400}
                  className="relative z-10 mx-auto h-auto w-full max-w-[280px] opacity-90 sm:max-w-[320px]"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="scroll-mt-24 border-b border-slate-800/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-10 max-w-2xl space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
                How we partner with your team
              </h2>
              <p className="text-slate-400">
                End-to-end delivery from architecture through shipping code,
                with an emphasis on maintainability and measurable outcomes for
                the business.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-emerald-500">
                    <Boxes className="size-5" aria-hidden />
                  </div>
                  <CardTitle>
                    Software Architecture{" "}
                    <span className="font-normal text-slate-500">(.NET / Cloud)</span>
                  </CardTitle>
                  <CardDescription>
                    Design and evolution of dependable .NET backends and
                    cloud-native platforms.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 text-sm leading-relaxed text-slate-400">
                  We design service boundaries, integration patterns, and
                  deployment topologies so your platform stays operable as load
                  and scope grow.
                </CardContent>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-emerald-500">
                    <Code2 className="size-5" aria-hidden />
                  </div>
                  <CardTitle>
                    Modern Frontend{" "}
                    <span className="font-normal text-slate-500">
                      (React / TypeScript)
                    </span>
                  </CardTitle>
                  <CardDescription>
                    Product-grade interfaces engineered for accessibility,
                    latency, and long-term ergonomics.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 text-sm leading-relaxed text-slate-400">
                  We build accessible, performant interfaces with clear state
                  management and CI so product teams can iterate without
                  regressions.
                </CardContent>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-emerald-500">
                    <FlaskConical className="size-5" aria-hidden />
                  </div>
                  <CardTitle>
                    Specialized Development{" "}
                    <span className="font-normal text-slate-500">
                      (visualizations / Supabase / testing)
                    </span>
                  </CardTitle>
                  <CardDescription>
                    Data-intensive visualizations, Supabase-backed workflows,
                    and testing strategy that earns production trust.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 text-sm leading-relaxed text-slate-400">
                  We tackle high-signal problems—data-heavy UIs, Supabase-backed
                  products, and automated test strategy—where depth of
                  engineering matters.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="case-studies"
          className="scroll-mt-24 border-b border-slate-800/60 px-4 py-12 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl rounded-xl border border-dashed border-slate-800 bg-slate-950/30 px-6 py-10 text-center sm:py-12">
            <p className="text-sm font-medium text-slate-500">Case studies</p>
            <p className="mx-auto mt-2 max-w-lg text-slate-400">
              We highlight selected engagements—with architecture snapshots,
              constraints, and outcomes—as we publish deeper write-ups alongside
              our clients&apos; timelines.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-800/60 px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
              Core technologies
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              {[".NET", "React", "TypeScript", "PostgreSQL", "Supabase"].join(
                " • ",
              )}
            </p>
          </div>
        </section>

        <section
          id="blog"
          className="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl rounded-xl border border-dashed border-slate-800 bg-slate-950/30 px-6 py-10 text-center sm:py-14">
            <p className="text-sm font-medium text-slate-500">Blog</p>
            <p className="mx-auto mt-2 max-w-md text-slate-400">
              We publish notes on architecture, frontend performance, and
              operating reliable software—as the consultancy grows we will round
              this out with essays and deeper case write-ups.
            </p>
          </div>
        </section>

        <footer
          id="contact"
          className="mt-auto border-t border-slate-800/80 px-4 py-8 sm:px-6 lg:px-8"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Whetstone Software Consulting LLC</span>
            <span className="text-slate-600">
              Engineering-led consultancy • Production-grade delivery
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
