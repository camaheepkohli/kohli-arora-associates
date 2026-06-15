import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { CtaBand } from "@/components/site/cta-band";
import { FIRM, mailLink, telLink, waLink } from "@/lib/firm";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Kohli Arora & Associates | CA Firm in Jammu" },
      {
        name: "description",
        content:
          "Contact Kohli Arora & Associates — Chartered Accountants in Jammu. Call +91 60050 57822, WhatsApp, email or visit our Sec-14 Railway Road office in Guru Nanak Nagar.",
      },
      { property: "og:title", content: "Contact Kohli Arora & Associates | CA Firm in Jammu" },
      {
        property: "og:description",
        content:
          "Get in touch with CA Maheep Kohli for a free consultation. WhatsApp, call, email or visit our office in Jammu.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  mobile: z.string().trim().regex(/^[0-9+\-\s]{7,15}$/, "Enter a valid mobile number"),
  email: z.string().trim().email("Enter a valid email").max(120),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(5, "Tell us a little about your requirement").max(1000),
});

const SERVICE_OPTIONS = [
  "Income Tax / ITR Filing",
  "GST Registration",
  "GST Return Filing",
  "Company Registration",
  "LLP Registration",
  "MSME / Udyam Registration",
  "ROC Compliance",
  "Accounting & Bookkeeping",
  "Audit Services",
  "TDS Return Filing",
  "PSARA Registration",
  "Business / Financial Advisory",
  "Other",
];

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      mobile: (form.elements.namedItem("mobile") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = String(issue.path[0]);
        if (!fe[k]) fe[k] = issue.message;
      }
      setErrors(fe);
      return;
    }
    setErrors({});
    const text =
      `Hi Kohli Arora & Associates,\n\n` +
      `Name: ${parsed.data.name}\n` +
      `Mobile: ${parsed.data.mobile}\n` +
      `Email: ${parsed.data.email}\n` +
      `Service required: ${parsed.data.service}\n\n` +
      `${parsed.data.message}`;
    window.open(waLink(text), "_blank", "noopener");
  };

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
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">Get in touch</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold leading-tight md:text-5xl">
            Talk to a Chartered Accountant today
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Whether you need help with GST, income tax, registrations, audit or accounting — we are one
            WhatsApp away. Book a free consultation now.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:py-20">
          {/* Form */}
          <div className="rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-card)] md:p-8">
            <h2 className="font-serif text-2xl font-bold text-navy">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in your details — submitting opens a pre-filled WhatsApp chat with us so we can reply
              instantly.
            </p>
            <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
              <Field label="Full name" name="name" type="text" error={errors.name} placeholder="Your name" required />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Mobile number" name="mobile" type="tel" error={errors.mobile} placeholder="+91 …" required />
                <Field label="Email" name="email" type="email" error={errors.email} placeholder="you@example.com" required />
              </div>
              <div>
                <label className="text-sm font-medium text-navy">Service required <span className="text-destructive">*</span></label>
                <select
                  name="service"
                  defaultValue=""
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                >
                  <option value="" disabled>Select a service</option>
                  {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-navy">Message <span className="text-destructive">*</span></label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Tell us briefly about your requirement…"
                  required
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--gradient-gold)] px-6 py-3 font-semibold text-navy shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4" /> Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact details */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-border bg-secondary p-6">
              <h3 className="font-serif text-xl font-bold text-navy">Direct contact</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <ContactItem
                  icon={<MessageCircle className="h-4 w-4" />}
                  label="WhatsApp"
                  value={FIRM.phoneDisplay}
                  href={waLink()}
                  external
                />
                <ContactItem icon={<Phone className="h-4 w-4" />} label="Call" value={FIRM.phoneDisplay} href={telLink} />
                <ContactItem icon={<Mail className="h-4 w-4" />} label="Email" value={FIRM.email} href={mailLink} />
                <ContactItem
                  icon={<MapPin className="h-4 w-4" />}
                  label="Office"
                  value="Sec-14, Railway Rd, Guru Nanak Nagar, Jammu, J&K 180004"
                  href={FIRM.gbpUrl}
                  external
                />
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-2">
                <a
                  href={waLink("Hi, I'd like to book a free consultation.")}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a
                  href={telLink}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-royal px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
              <h3 className="font-serif text-xl font-bold text-navy">Office hours</h3>
              <p className="mt-2 text-sm text-muted-foreground">Mon – Sat · 10:00 AM – 7:00 PM</p>
              <p className="text-sm text-muted-foreground">Sunday · Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">Find us in Jammu</h2>
          <p className="mt-2 text-muted-foreground">
            Sec-14, Railway Road, Guru Nanak Nagar, Jammu, Jammu &amp; Kashmir 180004.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <iframe
              title="Kohli Arora & Associates office on Google Maps"
              src={FIRM.mapEmbed}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>

      <CtaBand
        title="Prefer a quick call instead?"
        subtitle={`Talk to ${FIRM.principal} on ${FIRM.phoneDisplay} — free consultation, no obligation.`}
      />
    </>
  );
}

function Field({
  label,
  name,
  type,
  error,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  error?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-navy">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-navy text-[color:var(--gold)]">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener" : undefined}
          className="block break-words font-medium text-navy hover:text-royal"
        >
          {value}
        </a>
      </span>
    </li>
  );
}

// touched to ensure SERVICES import isn't tree-shaken from typecheck context
void SERVICES;