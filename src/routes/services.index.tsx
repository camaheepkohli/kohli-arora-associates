import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/site/cta-band";
import { Icon } from "@/components/site/icon";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "CA Services in Jammu | Tax, GST, Audit, Registration | Kohli Arora & Associates" },
      {
        name: "description",
        content:
          "Explore the full range of Chartered Accountant services offered by Kohli Arora & Associates in Jammu — income tax, GST, audit, company / LLP / MSME registration, ROC and PSARA compliance.",
      },
      { property: "og:title", content: "CA Services in Jammu | Kohli Arora & Associates" },
      {
        property: "og:description",
        content:
          "Income tax, GST, audit, registration and compliance services in Jammu under one roof.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesHub,
});

function ServicesHub() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(50% 60% at 90% 10%, oklch(0.77 0.13 84 / 0.45) 0%, transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">Our services</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold leading-tight md:text-5xl">
            Chartered Accountant services for every stage of your business
          </h1>
          <p className="mt-5 max-w-3xl text-muted-foreground">
            From your first GST return to large statutory audits — explore the full range of services we
            deliver to businesses, startups and individuals across Jammu &amp; Kashmir.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-[var(--shadow-card)]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-[color:var(--gold)] transition-colors group-hover:bg-royal group-hover:text-white">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>
                <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-royal">{s.category}</span>
                <h2 className="mt-1 font-serif text-lg font-bold text-navy">{s.navLabel}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">{s.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-royal">
                  View details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}