import { Phone, MessageCircle } from "lucide-react";
import { FIRM, telLink, waLink } from "@/lib/firm";

export function CtaBand({
  title = "Talk to a Chartered Accountant today",
  subtitle = "Free consultation · Transparent pricing · Trusted CA firm in Jammu",
  whatsappMessage,
}: {
  title?: string;
  subtitle?: string;
  whatsappMessage?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white text-[#0B1F3A] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 80% 0%, oklch(0.77 0.13 84 / 0.35) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center md:px-6 md:py-20">
        <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
        <p className="max-w-2xl text-navy font-medium">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={waLink(whatsappMessage ?? "Hi, I'd like to book a free consultation.")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--gradient-gold)] px-6 py-3 font-semibold text-navy shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" /> Book Free Consultation
          </a>
          <a
            href={telLink}
            className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 font-semibold text-[#0B1F3A] transition-colors hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> Call {FIRM.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}