import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { telLink, waLink } from "@/lib/firm";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 print:hidden">
      <a
        href={waLink("Hi, I'd like to book a free consultation with Kohli Arora & Associates.")}
        target="_blank"
        rel="noopener"
        aria-label="Book free consultation on WhatsApp"
        className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-4 py-3 text-sm font-semibold text-white shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
      >
        <CalendarCheck className="h-4 w-4" />
        <span className="hidden sm:inline">Book Free Consultation</span>
        <span className="sm:hidden">Book Now</span>
      </a>
      <div className="flex gap-2">
        <a
          href={waLink()}
          target="_blank"
          rel="noopener"
          aria-label="Chat on WhatsApp"
          className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <a
          href={telLink}
          aria-label="Call now"
          className="grid h-12 w-12 place-items-center rounded-full bg-royal text-white shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}