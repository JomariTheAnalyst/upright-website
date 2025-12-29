import { getServiceBySlug } from "@/data/services";
import { ServiceDetailPage } from "@/components/sections/services/service-detail";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Software Development | Upright Solutions",
  description:
    "Custom software solutions built with scalable architecture. Web applications, enterprise systems, APIs, and mobile apps tailored to your business needs.",
};

export default function SoftwareDevelopmentPage() {
  const service = getServiceBySlug("software-development");

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
