import { notFound } from "@tanstack/react-router";
import { ServicePageLayout } from "./service-page";
import { getService, type ServicePage } from "@/lib/services";

export const serviceLoader = (slug: string) => (): ServicePage => {
  const data = getService(slug);
  if (!data) throw notFound();
  return data;
};

export const serviceHead = (slug: string) => ({ loaderData }: { loaderData?: ServicePage }) => {
  const data = loaderData ?? getService(slug)!;
  return {
    meta: [
      { title: data.title },
      { name: "description", content: data.description },
      { property: "og:title", content: data.title },
      { property: "og:description", content: data.description },
      { property: "og:url", content: `/${slug}` },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `/${slug}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: data.h1,
              description: data.description,
              provider: { "@id": "#localbusiness" },
              areaServed: [
                { "@type": "City", name: "Jammu" },
                { "@type": "State", name: "Jammu and Kashmir" },
              ],
              serviceType: data.category,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
                { "@type": "ListItem", position: 3, name: data.navLabel, item: `/${slug}` },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: data.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  };
};

export function ServiceRouteView({ data }: { data: ServicePage }) {
  return <ServicePageLayout data={data} />;
}