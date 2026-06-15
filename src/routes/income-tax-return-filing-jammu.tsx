import { createFileRoute } from "@tanstack/react-router";
import { serviceLoader, serviceHead, ServiceRouteView } from "@/components/site/service-route";

const SLUG = "income-tax-return-filing-jammu";

export const Route = createFileRoute("/income-tax-return-filing-jammu")({
  loader: serviceLoader(SLUG),
  head: serviceHead(SLUG),
  component: RouteComponent,
});

function RouteComponent() {
  const data = Route.useLoaderData();
  return <ServiceRouteView data={data} />;
}
