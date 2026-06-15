import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { FIRM, mailLink, telLink, waLink } from "@/lib/firm";

const FOOTER_SERVICES = [
  { to: "/gst-registration-jammu", label: "GST Registration" },
  { to: "/gst-return-filing-jammu", label: "GST Return Filing" },
  { to: "/income-tax-return-filing-jammu", label: "Income Tax Returns" },
  { to: "/msme-registration-jammu", label: "MSME Registration" },
  { to: "/trademark-registration-jammu", label: "Trademark Registration" },
  { to: "/company-registration-jammu", label: "Company Registration" },
  { to: "/psara-registration-jammu", label: "PSARA Registration" },
  { to: "/roc-compliance-jammu", label: "ROC Compliance" },
  { to: "/audit-services-jammu", label: "Audit Services" },
  { to: "/accounting-bookkeeping-jammu", label: "Accounting & Bookkeeping" },
];

const RESOURCES = [
  { href: "https://www.incometax.gov.in/iec/foportal/", label: "Income Tax Portal" },
  { href: "https://www.gst.gov.in/", label: "GST Portal" },
  { href: "https://www.mca.gov.in/", label: "MCA Portal" },
  { href: "https://udyamregistration.gov.in/", label: "Udyam Portal" },
  { href: "https://www.tdscpc.gov.in/", label: "TRACES (TDS) Portal" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 md:px-6 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-white/5 font-serif text-lg font-bold text-[color:var(--gold)] ring-1 ring-[color:var(--gold)]/40">
              KA
            </span>
            <div>
              <p className="font-serif text-base font-semibold">Kohli Arora &amp; Associates</p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">Chartered Accountants</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A Jammu-based Chartered Accountant firm led by <strong className="text-white">CA Maheep Kohli</strong>, helping
            businesses, startups and individuals with taxation, GST, registrations, audit and compliance.
          </p>
          <div className="mt-5 overflow-hidden rounded-lg border border-white/10">
            <iframe
              title="Kohli Arora & Associates location map"
              src={FIRM.mapEmbed}
              width="100%"
              height="160"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
              style={{ border: 0 }}
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--gold)]">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {FOOTER_SERVICES.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="hover:text-white">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--gold)]">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">All Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li>
              <a href={FIRM.gbpUrl} target="_blank" rel="noopener" className="hover:text-white">
                Google Business Profile
              </a>
            </li>
            <li><a href="/sitemap.xml" className="hover:text-white">Sitemap</a></li>
          </ul>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-[color:var(--gold)]">Useful Resources</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {RESOURCES.map((r) => (
              <li key={r.href}>
                <a href={r.href} target="_blank" rel="noopener" className="hover:text-white">
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--gold)]">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
              <span>Sector 14, Railway Road, Guru Nanak Nagar,<br />Jammu, Jammu &amp; Kashmir 180004, India</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
              <a href={telLink} className="hover:text-white">{FIRM.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
              <a href={waLink()} target="_blank" rel="noopener" className="hover:text-white">
                WhatsApp Us
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
              <a href={mailLink} className="hover:text-white">{FIRM.email}</a>
            </li>
          </ul>
          <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-xs text-muted-foreground">
            <p className="font-semibold text-white/90">Office Hours</p>
            <p className="mt-1">Mon – Sat: 10:00 AM – 8:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/60 md:flex-row md:px-6">
          <p>© 2026 Kohli Arora &amp; Associates. All Rights Reserved.</p>
          <p>Chartered Accountants · Jammu &amp; Kashmir</p>
        </div>
      </div>
    </footer>
  );
}