import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Card data for stacked cards
export const cardData = [
  {
    id: 1,
    title: "End-to-End Integration",
    description: "Connect legacy and modern platforms with secure, robust APIs. Our integration solutions bridge the gap between your existing infrastructure and cutting-edge technologies.",
    images: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
    ],
    color: "#ffadffff",
  },
  {
    id: 2,
    title: "Data Synchronization",
    description: "Achieve real-time data consistency across all departments and systems. Our automated synchronization ensures that every team member has access to the most current information.",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=80",
    ],
    color: "#33c791",
  },
  {
    id: 3,
    title: "Scalable Architecture",
    description: "Build solutions that grow with your business. Our cloud-native, microservices-based architectures are designed to handle increasing workloads without compromising performance.",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop&q=80",
    ],
    color: "#0d8dff",
  },
  {
    id: 4,
    title: "Ongoing Support",
    description: "Continuous monitoring and performance tuning keep your systems running at peak efficiency. Our dedicated support team provides proactive maintenance and optimization.",
    images: [
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
    ],
    color: "#e2d888ff",
  },
];
