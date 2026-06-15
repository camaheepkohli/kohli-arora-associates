import { createFileRoute } from "@tanstack/react-router";
import { serviceLoader, serviceHead, ServiceRouteView } from "@/components/site/service-route";

const SLUG = "roc-compliance-jammu";

export const Route = createFileRoute("/roc-compliance-jammu")({
  loader: serviceLoader(SLUG),
  head: serviceHead(SLUG),
  component: RouteComponent,
});

function RouteComponent() {
  const data = Route.useLoaderData();
  return <ServiceRouteView data={data} />;
}
