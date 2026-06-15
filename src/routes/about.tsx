import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle2,
  Clock,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CtaBand } from "@/components/site/cta-band";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kohli Arora & Associates | CA Maheep Kohli, Jammu" },
      {
        name: "description",
        content:
          "Kohli Arora & Associates is a Jammu-based Chartered Accountant firm led by CA Maheep Kohli, offering taxation, GST, audit, registration and advisory services.",
      },
      { property: "og:title", content: "About Kohli Arora & Associates | CA Maheep Kohli" },
      {
        property: "og:description",
        content:
          "Meet the team and approach behind a trusted Chartered Accountant firm in Jammu.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  { icon: Award, title: "Qualified Chartered Accountant", body: "Practising under ICAI guidelines with deep expertise across taxation, audit and advisory." },
  { icon: ShieldCheck, title: "Professional Approach", body: "A structured, process-driven workflow for every assignment, big or small." },
  { icon: Clock, title: "Timely Compliance", body: "We treat your due dates as our own. Every filing — on time, every time." },
  { icon: HeartHandshake, title: "Personalised Service", body: "We invest time to understand your business and your goals before we advise." },
  { icon: MessageCircle, title: "Transparent Communication", body: "Clear, jargon-free updates so you always know where things stand." },
  { icon: Sparkles, title: "Trusted Financial Guidance", body: "Practical advice that helps you save tax, stay compliant and grow." },
];

function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(50% 60% at 90% 10%, oklch(0.77 0.13 84 / 0.4) 0%, transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">About us</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold leading-tight md:text-6xl">
            A Jammu CA firm built on trust, expertise and accuracy.
          </h1>
          <p className="mt-5 max-w-3xl text-muted-foreground md:text-lg">
            Kohli Arora &amp; Associates is a Chartered Accountant firm based in Guru Nanak Nagar,
            Jammu, helping businesses, startups, professionals and individuals across Jammu &amp; Kashmir
            with taxation, compliance, registrations, audits and financial advisory.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[1fr_1.4fr] md:px-6 md:py-24">
          <div>
            <div className="rounded-2xl border border-border bg-secondary p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-royal">Principal</p>
              <h2 className="mt-2 font-serif text-2xl font-bold text-navy">CA Maheep Kohli</h2>
              <p className="mt-1 text-sm text-muted-foreground">Chartered Accountant</p>
              <p className="mt-4 text-sm leading-relaxed text-foreground">
                CA Maheep Kohli is a qualified Chartered Accountant and the principal of Kohli Arora &amp;
                Associates. With strong expertise across direct &amp; indirect taxation, audit, corporate law
                and advisory, he leads engagements with a focus on accuracy, transparency and long-term client
                relationships.
              </p>
            </div>
          </div>
          <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
            <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">
              Our story &amp; approach
            </h2>
            <p>
              Kohli Arora &amp; Associates was founded to bring metro-grade Chartered Accountant services to
              Jammu — combining technical depth, modern processes and a genuinely personal client experience.
              We believe that great financial advice should be accessible, transparent and proactive.
            </p>
            <p>
              Our clients range from first-time founders registering a company, to established businesses that
              rely on us for monthly GST, accounting, payroll, audit and ROC compliance. We are equally comfortable
              guiding an individual through their first ITR as we are advising a growing enterprise on tax structuring
              and statutory audit.
            </p>
            <p>
              Everything we do is anchored in one belief: when compliance is handled well, business owners can
              focus on what they do best — growth.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-royal">Our values</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy md:text-4xl">
              What you can expect from us
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-card)]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-[color:var(--gold)]">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">
            Practice areas
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            We cover the full Chartered Accountant scope — from compliance to strategic advisory.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Income Tax & ITR Filing",
              "GST Registration & Returns",
              "Company & LLP Registration",
              "MSME / Udyam Registration",
              "Statutory & Internal Audit",
              "ROC Annual Compliance",
              "TDS Compliance & Filing",
              "Accounting & Bookkeeping",
              "Payroll Processing",
              "PSARA Registration",
              "Startup Advisory",
              "Business & Financial Consulting",
            ].map((p) => (
              <li key={p} className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-3 text-sm font-medium text-navy">
                <CheckCircle2 className="h-4 w-4 text-royal" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-royal hover:text-navy">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}