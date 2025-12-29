import { getServiceBySlug } from "@/data/services";
import { ServiceDetailPage } from "@/components/sections/services/service-detail";
import { notFound } from "next/navigation";

export const metadata = {
  title: "IT Consultancy | Upright Solutions",
  description:
    "Strategic IT advisory services. Digital transformation, technology assessment, IT strategy development, and vendor selection guidance.",
};

export default function ITConsultancyPage() {
  const service = getServiceBySlug("it-consultancy");

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
