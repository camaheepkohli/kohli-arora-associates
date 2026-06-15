import { Link } from "@tanstack/react-router";
import { ChevronRight, CheckCircle2, FileCheck2 } from "lucide-react";
import type { ServicePage as ServicePageData } from "@/lib/services";
import { SERVICES } from "@/lib/services";
import { CtaBand } from "./cta-band";
import { FaqAccordion } from "./faq-accordion";
import { Icon } from "./icon";

export function ServicePageLayout({ data }: { data: ServicePageData }) {
  const related = SERVICES.filter((s) => s.slug !== data.slug).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(50% 60% at 90% 10%, oklch(0.77 0.13 84 / 0.45) 0%, transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <nav className="mb-5 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/90">{data.navLabel}</span>
          </nav>
          <div className="flex items-start gap-4">
            <span className="hidden h-12 w-12 shrink-0 place-items-center rounded-lg bg-white/5 text-[color:var(--gold)] ring-1 ring-[color:var(--gold)]/40 sm:grid">
              <Icon name={data.icon} className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <h1 className="font-serif text-3xl font-bold leading-tight md:text-5xl">{data.h1}</h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {data.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
          <div>
            <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">What's included</h2>
            <ul className="mt-6 space-y-3">
              {data.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-[15px] text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-royal" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-secondary p-6 md:p-8">
            <h3 className="flex items-center gap-2 font-serif text-xl font-bold text-navy">
              <FileCheck2 className="h-5 w-5 text-[color:var(--gold)]" />
              Documents required
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {data.documents.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">How we work</h2>
            <p className="mt-2 text-muted-foreground">A simple, transparent four-step process.</p>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.process.map((p, i) => (
              <li
                key={p.title}
                className="rounded-xl border border-border bg-background p-6 shadow-[var(--shadow-card)]"
              >
                <div className="font-serif text-3xl font-bold text-[color:var(--gold)]">
                  0{i + 1}
                </div>
                <h3 className="mt-2 font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">Key benefits</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {data.benefits.map((b) => (
              <div
                key={b}
                className="flex gap-3 rounded-xl border border-border p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-royal" />
                <p className="text-[15px] text-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-4xl px-4 py-14 md:px-6 md:py-20">
          <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <FaqAccordion items={data.faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        title={`Get started with ${data.navLabel.toLowerCase()} today`}
        subtitle="Free consultation · Transparent fees · On-time compliance"
        whatsappMessage={`Hi, I'm interested in ${data.navLabel} services. Please share details.`}
      />

      {/* Related services */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">Related services</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/services/$slug"
                params={{ slug: r.slug }}
                className="group rounded-xl border border-border p-5 transition-shadow hover:shadow-[var(--shadow-card)]"
              >
                <div className="grid h-10 w-10 place-items-center rounded-md bg-secondary text-royal">
                  <Icon name={r.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-semibold text-navy group-hover:text-royal">
                  {r.navLabel}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {r.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}