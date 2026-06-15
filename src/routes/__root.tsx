import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site/site-header";
import { SiteFooter } from "../components/site/site-footer";
import { FloatingActions } from "../components/site/floating-actions";
import { FIRM } from "../lib/firm";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kohli Arora & Associates | CA Firm in Jammu | GST, ITR & Reg" },
      {
        name: "description",
        content:
          "Kohli Arora & Associates — trusted Chartered Accountant firm in Jammu offering GST, income tax, company registration, audit and ROC compliance services.",
      },
      { name: "author", content: "Kohli Arora & Associates" },
      { name: "theme-color", content: "#0F172A" },
      { property: "og:site_name", content: "Kohli Arora & Associates" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Kohli Arora & Associates | CA Firm in Jammu | GST, ITR & Reg" },
      { name: "twitter:title", content: "Kohli Arora & Associates | CA Firm in Jammu | GST, ITR & Reg" },
      { property: "og:description", content: "Kohli Arora & Associates — trusted Chartered Accountant firm in Jammu offering GST, income tax, company registration, audit and ROC compliance services." },
      { name: "twitter:description", content: "Kohli Arora & Associates — trusted Chartered Accountant firm in Jammu offering GST, income tax, company registration, audit and ROC compliance services." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "#organization",
              name: FIRM.name,
              url: "/",
              founder: { "@type": "Person", name: FIRM.principal, jobTitle: "Chartered Accountant" },
              sameAs: [FIRM.gbpUrl],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: FIRM.phoneDisplay,
                  contactType: "customer service",
                  email: FIRM.email,
                  areaServed: "IN",
                  availableLanguage: ["en", "hi"],
                },
              ],
            },
            {
              "@type": ["LocalBusiness", "AccountingService", "ProfessionalService"],
              "@id": "#localbusiness",
              name: FIRM.name,
              image: "/og-image.jpg",
              priceRange: "₹₹",
              telephone: FIRM.phoneDisplay,
              email: FIRM.email,
              url: "/",
              address: {
                "@type": "PostalAddress",
                streetAddress: FIRM.address.line,
                addressLocality: FIRM.address.city,
                addressRegion: FIRM.address.region,
                postalCode: FIRM.address.postal,
                addressCountry: FIRM.address.country,
              },
              geo: { "@type": "GeoCoordinates", latitude: FIRM.geo.lat, longitude: FIRM.geo.lng },
              areaServed: [
                { "@type": "City", name: "Jammu" },
                { "@type": "State", name: "Jammu and Kashmir" },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "10:00",
                  closes: "19:00",
                },
              ],
              sameAs: [FIRM.gbpUrl],
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
        <SiteHeader />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <SiteFooter />
        <FloatingActions />
      </div>
    </QueryClientProvider>
  );
}
