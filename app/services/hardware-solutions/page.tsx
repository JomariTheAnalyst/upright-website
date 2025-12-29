import { getServiceBySlug } from "@/data/services";
import { ServiceDetailPage } from "@/components/sections/services/service-detail";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Hardware Solutions & Maintenance | Upright Solutions",
  description:
    "Comprehensive hardware solutions including procurement, installation, preventive maintenance, and emergency repairs for IT infrastructure.",
};

export default function HardwareSolutionsPage() {
  const service = getServiceBySlug("hardware-solutions");

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
