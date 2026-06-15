import { createFileRoute } from "@tanstack/react-router";
import { serviceLoader, serviceHead, ServiceRouteView } from "@/components/site/service-route";

const SLUG = "company-registration-jammu";

export const Route = createFileRoute("/company-registration-jammu")({
  loader: serviceLoader(SLUG),
  head: serviceHead(SLUG),
  component: RouteComponent,
});

function RouteComponent() {
  const data = Route.useLoaderData();
  return <ServiceRouteView data={data} />;
}
