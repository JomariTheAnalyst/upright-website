import { getServiceBySlug } from "@/data/services";
import { ServiceDetailPage } from "@/components/sections/services/service-detail";
import { notFound } from "next/navigation";

export const metadata = {
  title: "System Design & Analysis | Upright Solutions",
  description:
    "Seamless system integration services. Connect disparate systems, modernize legacy infrastructure, and enable real-time data flow across your organization.",
};

export default function SystemIntegrationPage() {
  const service = getServiceBySlug("system-integration");

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
