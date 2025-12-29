import { getServiceBySlug } from "@/data/services";
import { ServiceDetailPage } from "@/components/sections/services/service-detail";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Learning Content Development | Upright Solutions",
  description:
    "Digital learning solutions including custom e-learning courses, LMS platforms, assessments, and mobile learning for effective workforce training.",
};

export default function LearningContentPage() {
  const service = getServiceBySlug("learning-content");

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
