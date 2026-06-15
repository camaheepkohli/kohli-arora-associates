import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { FIRM, telLink, waLink } from "@/lib/firm";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const SERVICE_LINKS: { to: string; label: string }[] = [
  { to: "/gst-registration-jammu", label: "GST Registration" },
  { to: "/gst-return-filing-jammu", label: "GST Return Filing" },
  { to: "/income-tax-return-filing-jammu", label: "Income Tax Return Filing" },
  { to: "/company-registration-jammu", label: "Company Registration" },
  { to: "/llp-registration-jammu", label: "LLP Registration" },
  { to: "/msme-registration-jammu", label: "MSME / Udyam Registration" },
  { to: "/trademark-registration-jammu", label: "Trademark Registration" },
  { to: "/psara-registration-jammu", label: "PSARA Registration" },
  { to: "/roc-compliance-jammu", label: "ROC Compliance" },
  { to: "/audit-services-jammu", label: "Audit Services" },
  { to: "/accounting-bookkeeping-jammu", label: "Accounting & Bookkeeping" },
  { to: "/tds-return-filing-jammu", label: "TDS Return Filing" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
          <img src="/ca-india-logo.png" alt="CA India" className="h-14 w-auto shrink-0" />
          <span className="min-w-0">
            <span className="block truncate font-serif text-base font-bold leading-tight text-navy">
              Kohli Arora & Associates
            </span>
            <span className="block truncate text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Chartered Accountants
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            to="/"
            className="text-sm font-medium text-navy/80 transition-colors hover:text-navy"
            activeProps={{ className: "text-navy font-semibold" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-navy/80 transition-colors hover:text-navy"
            activeProps={{ className: "text-navy font-semibold" }}
          >
            About
          </Link>
          <div className="group relative">
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-sm font-medium text-navy/80 transition-colors hover:text-navy"
              activeProps={{ className: "text-navy font-semibold" }}
            >
              Services <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-[640px] -translate-x-1/2 rounded-xl border border-border bg-background p-3 opacity-0 shadow-[var(--shadow-elegant)] transition-all group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-1">
                {SERVICE_LINKS.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="rounded-md px-3 py-2 text-sm text-navy/80 hover:bg-secondary hover:text-navy"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
              <Link
                to="/services"
                className="mt-2 block rounded-md bg-secondary px-3 py-2 text-center text-xs font-semibold uppercase tracking-wider text-royal hover:bg-secondary/70"
              >
                View all services →
              </Link>
            </div>
          </div>
          <Link
            to="/contact"
            className="text-sm font-medium text-navy/80 transition-colors hover:text-navy"
            activeProps={{ className: "text-navy font-semibold" }}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink}
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-royal"
          >
            <Phone className="h-4 w-4" />
            {FIRM.phoneDisplay}
          </a>
          <a
            href={waLink("Hi, I'd like to book a free consultation with Kohli Arora & Associates.")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center rounded-md bg-[var(--gradient-gold)] px-4 py-2 text-sm font-semibold text-navy shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
          >
            Book Free Consultation
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-md text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-y-auto border-t border-border bg-background lg:hidden",
          open ? "max-h-[80vh]" : "max-h-0",
          "transition-[max-height] duration-300",
        )}
      >
        <div className="space-y-1 px-4 py-3">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-navy/80 hover:bg-secondary"
              activeProps={{ className: "bg-secondary text-navy font-semibold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => setServicesOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium text-navy/80 hover:bg-secondary"
          >
            Services <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
          </button>
          {servicesOpen && (
            <div className="space-y-0.5 pl-3">
              <Link
                to="/services"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-1.5 text-sm font-semibold text-royal hover:bg-secondary"
              >
                All Services →
              </Link>
              {SERVICE_LINKS.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-1.5 text-sm text-navy/75 hover:bg-secondary"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}
          <div className="mt-3 grid grid-cols-1 gap-2">
            <a
              href={telLink}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-navy"
            >
              <Phone className="h-4 w-4" /> {FIRM.phoneDisplay}
            </a>
            <a
              href={waLink("Hi, I'd like to book a free consultation.")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-md bg-[var(--gradient-gold)] px-4 py-2.5 text-sm font-semibold text-navy"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}