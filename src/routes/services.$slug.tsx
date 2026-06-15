import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/service-page";
import { getService, SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const data = getService(params.slug);
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData, params }) => {
    const data = loaderData ?? SERVICES[0];
    return {
      meta: [
        { title: data.title },
        { name: "description", content: data.description },
        { property: "og:title", content: data.title },
        { property: "og:description", content: data.description },
        { property: "og:url", content: `/services/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
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
                  { "@type": "ListItem", position: 3, name: data.navLabel, item: `/services/${params.slug}` },
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
  },
  component: ServiceRoute,
});

function ServiceRoute() {
  const data = Route.useLoaderData();
  return <ServicePageLayout data={data} />;
}