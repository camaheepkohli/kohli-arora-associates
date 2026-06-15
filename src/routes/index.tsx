import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { CtaBand } from "@/components/site/cta-band";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { Icon } from "@/components/site/icon";
import { FIRM, mailLink, telLink, waLink } from "@/lib/firm";
import { HOME_FAQS, SERVICE_CATEGORIES } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chartered Accountant in Jammu | Kohli Arora & Associates" },
      {
        name: "description",
        content:
          "Trusted Chartered Accountant firm in Jammu offering GST, income tax, company & LLP registration, audit, ROC compliance and accounting services. Book a free consultation today.",
      },
      { property: "og:title", content: "Chartered Accountant in Jammu | Kohli Arora & Associates" },
      {
        property: "og:description",
        content:
          "Professional CA services in Jammu — taxation, GST, registrations, audit and advisory by CA Maheep Kohli.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

const TRUST = [
  { icon: Award, label: "Qualified Chartered Accountant" },
  { icon: Clock, label: "Timely Compliance" },
  { icon: HeartHandshake, label: "Personalised Service" },
  { icon: ShieldCheck, label: "Transparent & Trusted" },
];

const WHY = [
  { icon: Award, title: "Professional Expertise", body: "Led by CA Maheep Kohli with rigorous ICAI-grade quality across taxation, audit and advisory." },
  { icon: Clock, title: "Timely Compliance", body: "Every return, every filing — on time, every single month. Zero late fees, ever." },
  { icon: Users, title: "Client-Centric Approach", body: "We invest time to understand your business before recommending solutions." },
  { icon: MessageCircle, title: "Transparent Communication", body: "Clear, jargon-free updates on WhatsApp and email — you always know where things stand." },
  { icon: Sparkles, title: "Personalised Solutions", body: "No one-size-fits-all. Each engagement is tailored to your goals and stage of business." },
  { icon: ShieldCheck, title: "Reliable Support", body: "A single point of contact for all your financial, compliance and advisory needs." },
];

const PROCESS = [
  { title: "Free Consultation", body: "Tell us about your needs — no commitment, no charge." },
  { title: "Document Collection", body: "Share documents securely on WhatsApp or email." },
  { title: "Processing & Filing", body: "We prepare, review and file accurately and on time." },
  { title: "Approval & Support", body: "You receive certificates, acknowledgements and ongoing support." },
];

const TESTIMONIALS = [
  {
    name: "Business Owner",
    role: "Retail & Trading · Jammu",
    text: "Their team brought clarity and discipline to our GST and accounting work. Monthly compliance is now seamless and we always receive timely, well-explained reports.",
  },
  {
    name: "Salaried Employee",
    role: "Jammu",
    text: "From filing my returns to documentation for my rental property, the guidance has been practical, honest and easy to act on. A reliable CA.",
  },
  {
    name: "Proprietor",
    role: "Distribution Business · J&K",
    text: "Internal controls, internal audit and statutory work are now completely stress-free. Excellent attention to detail and a turnaround time we can count on.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1F3A] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(45% 55% at 85% 10%, oklch(0.77 0.13 84 / 0.35) 0%, transparent 60%), radial-gradient(40% 50% at 10% 90%, oklch(0.49 0.21 263 / 0.35) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[color:var(--gold)]">
              <Star className="h-3 w-3 fill-current" />
              Trusted CA Firm in Jammu
            </span>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.05] md:text-6xl text-white">
  Chartered Accountant in Jammu for
  <span className="text-[color:var(--gold)]"> GST,Tax & Audit </span>
  Services
</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Helping Businesses, Startups, Professionals and Individuals with Taxation, GST, Registrations, Audits and Compliance Services.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink("Hi, I'd like to book a free consultation with Kohli Arora & Associates.")}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--gradient-gold)] px-6 py-3.5 font-semibold text-white shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> Book Free Consultation
              </a>
              <a
                href={telLink}
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> Call {FIRM.phoneDisplay}
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/80 sm:grid-cols-4">
              {TRUST.map((t) => (
                <div key={t.label} className="flex items-center gap-2">
                  <t.icon className="h-4 w-4 text-[color:var(--gold)]" />
                  <span>{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick contact card */}
          <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">
              Free 15-minute consultation
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-white">Talk to CA Maheep Kohli</h2>
            <p className="mt-2 text-sm text-white/75">
              Get a clear, honest assessment of your tax, compliance or registration requirements — at no cost.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                Transparent, fixed-fee pricing
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                100% remote — WhatsApp, email, video call
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                Single point of contact for all CA work
              </li>
            </ul>
            <a
              href={waLink("Hi, I'd like to book a free 15-minute consultation.")}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-navy transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1fr_1.3fr] md:px-6 md:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-royal">About the firm</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy md:text-4xl">
              A Jammu CA firm built on trust, expertise and accuracy.
            </h2>
          </div>
          <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-navy">Kohli Arora &amp; Associates</strong> is a Chartered Accountant firm
              based in Guru Nanak Nagar, Jammu, founded and led by <strong className="text-navy">CA Maheep Kohli</strong>.
              We work with growing businesses, startups, professionals and individuals across Jammu &amp; Kashmir
              and pan-India.
            </p>
            <p>
              From day-to-day taxation and GST work to company registrations, audits and high-stakes business
              advisory, our practice is built on a simple promise: accurate work, delivered on time, with
              transparent communication and honest pricing.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-royal hover:text-navy"
            >
              Read more about our firm <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section id="services" className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-royal">What we do</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy md:text-4xl">
              Comprehensive CA services under one roof
            </h2>
            <p className="mt-3 text-muted-foreground">
              From compliance to advisory — everything your business needs from a Chartered Accountant in Jammu.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {SERVICE_CATEGORIES.map((cat) => (
              <Link
                key={cat.title}
                to={cat.href}
                className="group relative flex flex-col rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-[var(--shadow-card)]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-[color:var(--gold)] transition-colors group-hover:bg-royal group-hover:text-white">
                  <Icon name={cat.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-navy">{cat.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{cat.blurb}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                  {cat.items.slice(0, 4).map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--gold)]" />
                      {it}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-royal">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-royal">Why choose us</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy md:text-4xl">
              The qualities that define our practice
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-[var(--shadow-card)]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-royal">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-navy">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">How we work</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">A simple, transparent process</h2>
          </div>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <li
                key={p.title}
                className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="font-serif text-4xl font-bold text-[color:var(--gold)]">0{i + 1}</div>
                <h3 className="mt-2 font-semibold text-[color:var(--gold)]">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-royal">What clients say</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy md:text-4xl">
              Relationships built on trust
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-card)]"
              >
                <div className="flex gap-1 text-[color:var(--gold)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <p className="font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-royal">FAQs</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy md:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-10">
            <FaqAccordion items={HOME_FAQS} />
          </div>
        </div>
      </section>

      {/* Location / Maps */}
      <section id="visit-us" className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-royal">Visit us</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy md:text-4xl">
              Our office in Guru Nanak Nagar, Jammu
            </h2>
            <p className="mt-4 text-muted-foreground">
              Drop by our Sector 14 office for an in-person consultation, or work with us remotely from anywhere in
              Jammu &amp; Kashmir over WhatsApp, email and video call.
            </p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-navy text-[color:var(--gold)]">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">Address</span>
                  <span className="block font-medium text-navy">
                    Sector 14, Railway Road, Guru Nanak Nagar,<br />Jammu, Jammu &amp; Kashmir 180004
                  </span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-navy text-[color:var(--gold)]">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">Phone</span>
                  <a href={telLink} className="block font-medium text-navy hover:text-royal">{FIRM.phoneDisplay}</a>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-navy text-[color:var(--gold)]">
                  <Mail className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</span>
                  <a href={mailLink} className="block break-all font-medium text-navy hover:text-royal">{FIRM.email}</a>
                </span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink("Hi, I'd like to book a consultation at your Jammu office.")}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--gradient-gold)] px-5 py-2.5 text-sm font-semibold text-navy shadow-[var(--shadow-card)]"
              >
                <MessageCircle className="h-4 w-4" /> Book Consultation
              </a>
              <a
                href={FIRM.gbpUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-navy hover:border-royal"
              >
                Get Directions
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <iframe
              title="Kohli Arora & Associates — Sector 14, Guru Nanak Nagar, Jammu"
              src={FIRM.mapEmbed}
              width="100%"
              height="460"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[360px] w-full md:h-[460px]"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
