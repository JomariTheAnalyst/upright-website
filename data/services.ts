export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface ServiceData {
  id: string;
  slug: string;
  label: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  heroImage: string;
  features: ServiceFeature[];
  benefits: string[];
  process: ServiceProcess[];
  useCases: string[];
  technologies: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: "software-development",
    slug: "software-development",
    label: "Software Development",
    title: "Custom Software Solutions",
    tagline: "From Custom Apps To Enterprise Systems, All Tailor-Made.",
    description:
      "Whether it's a web application or a full enterprise solution, our software is built with scalable architecture that's secure, performant & aligned with your business goals.",
    longDescription:
      "We design and develop custom software solutions that transform how businesses operate. Our team combines deep technical expertise with a thorough understanding of your business needs to deliver applications that drive real results. From initial concept to deployment and beyond, we're your partner in digital innovation.",
    heroImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
    features: [
      {
        title: "Custom Web Applications",
        description:
          "Responsive, scalable web applications built with modern frameworks and best practices.",
        icon: "globe",
      },
      {
        title: "Enterprise Solutions",
        description:
          "Large-scale systems designed to handle complex business processes and high volumes.",
        icon: "building",
      },
      {
        title: "API Development",
        description:
          "RESTful and GraphQL APIs that enable seamless integration between systems.",
        icon: "code",
      },
      {
        title: "Mobile Applications",
        description:
          "Native and cross-platform mobile apps for iOS and Android devices.",
        icon: "smartphone",
      },
    ],
    benefits: [
      "Reduced operational costs through automation",
      "Improved efficiency and productivity",
      "Scalable solutions that grow with your business",
      "Enhanced data security and compliance",
      "24/7 technical support and maintenance",
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Planning",
        description:
          "We analyze your requirements, define project scope, and create a detailed roadmap.",
      },
      {
        step: 2,
        title: "Design & Architecture",
        description:
          "Our team designs the system architecture and user interfaces for optimal performance.",
      },
      {
        step: 3,
        title: "Development & Testing",
        description:
          "Agile development with continuous testing ensures quality at every stage.",
      },
      {
        step: 4,
        title: "Deployment & Support",
        description:
          "Smooth deployment followed by ongoing maintenance and support.",
      },
    ],
    useCases: [
      "E-commerce platforms",
      "Customer portals",
      "Inventory management systems",
      "Booking and reservation systems",
      "Document management solutions",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
  },
  {
    id: "system-integration",
    slug: "system-integration",
    label: "System Design & Analysis",
    title: "Seamless System Integration",
    tagline: "From Architecture To Implementation, All Strategically Planned.",
    description:
      "Whether it's optimizing existing systems or designing new infrastructure, our solutions are based on thorough analysis that's efficient, scalable & compliant with industry standards.",
    longDescription:
      "We help organizations connect disparate systems into a unified, efficient ecosystem. Our system integration services ensure that your technology investments work together seamlessly, enabling real-time data flow and streamlined operations across your entire infrastructure.",
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    features: [
      {
        title: "System Architecture Design",
        description:
          "Comprehensive architecture planning that aligns technology with business objectives.",
        icon: "layers",
      },
      {
        title: "Legacy System Modernization",
        description:
          "Transform outdated systems into modern, efficient solutions without disrupting operations.",
        icon: "refresh",
      },
      {
        title: "Data Integration",
        description:
          "Seamless data flow between applications, databases, and third-party services.",
        icon: "database",
      },
      {
        title: "Cloud Migration",
        description:
          "Strategic migration to cloud platforms for improved scalability and cost efficiency.",
        icon: "cloud",
      },
    ],
    benefits: [
      "Unified view of business data across systems",
      "Eliminated data silos and redundancy",
      "Improved decision-making with real-time insights",
      "Reduced manual data entry and errors",
      "Enhanced system reliability and uptime",
    ],
    process: [
      {
        step: 1,
        title: "Assessment & Analysis",
        description:
          "Comprehensive evaluation of existing systems, data flows, and integration requirements.",
      },
      {
        step: 2,
        title: "Solution Design",
        description:
          "Custom integration architecture designed for your specific needs and constraints.",
      },
      {
        step: 3,
        title: "Implementation",
        description:
          "Phased implementation with minimal disruption to ongoing operations.",
      },
      {
        step: 4,
        title: "Optimization & Monitoring",
        description:
          "Continuous monitoring and optimization for peak performance.",
      },
    ],
    useCases: [
      "ERP system integration",
      "CRM and marketing automation",
      "Supply chain connectivity",
      "Healthcare information exchange",
      "Financial system consolidation",
    ],
    technologies: [
      "MuleSoft",
      "Apache Kafka",
      "REST APIs",
      "GraphQL",
      "Azure",
      "Kubernetes",
    ],
  },
  {
    id: "learning-content",
    slug: "learning-content",
    label: "Learning Content Development",
    title: "Digital Learning Solutions",
    tagline: "From E-Learning To Training Systems, All Expertly Crafted.",
    description:
      "Whether it's interactive courses or comprehensive training platforms, our learning solutions are designed with engaging content that's effective, accessible & tailored to your workforce needs.",
    longDescription:
      "We create immersive digital learning experiences that engage learners and drive measurable outcomes. Our team combines instructional design expertise with cutting-edge technology to develop training solutions that transform how organizations build skills and knowledge.",
    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    features: [
      {
        title: "Custom E-Learning Courses",
        description:
          "Interactive, multimedia-rich courses designed for maximum engagement and retention.",
        icon: "book",
      },
      {
        title: "Learning Management Systems",
        description:
          "Comprehensive LMS platforms for course delivery, tracking, and reporting.",
        icon: "layout",
      },
      {
        title: "Assessment & Certification",
        description:
          "Robust assessment tools and certification programs to validate learning outcomes.",
        icon: "award",
      },
      {
        title: "Mobile Learning",
        description:
          "Responsive learning content accessible on any device, anywhere, anytime.",
        icon: "smartphone",
      },
    ],
    benefits: [
      "Reduced training costs and time",
      "Consistent training delivery across locations",
      "Improved knowledge retention",
      "Real-time progress tracking and analytics",
      "Scalable training for growing organizations",
    ],
    process: [
      {
        step: 1,
        title: "Needs Analysis",
        description:
          "Understanding your learning objectives, audience, and organizational goals.",
      },
      {
        step: 2,
        title: "Content Design",
        description:
          "Instructional design and storyboarding for effective learning experiences.",
      },
      {
        step: 3,
        title: "Development",
        description:
          "Creating interactive content with multimedia elements and assessments.",
      },
      {
        step: 4,
        title: "Launch & Iterate",
        description:
          "Deployment, learner feedback collection, and continuous improvement.",
      },
    ],
    useCases: [
      "Employee onboarding programs",
      "Compliance training",
      "Product knowledge training",
      "Leadership development",
      "Technical skills training",
    ],
    technologies: [
      "Articulate 360",
      "Adobe Captivate",
      "Moodle",
      "SCORM",
      "xAPI",
      "React",
    ],
  },
  {
    id: "it-consultancy",
    slug: "it-consultancy",
    label: "IT Consultancy",
    title: "Strategic IT Advisory",
    tagline: "From Strategy To Execution, All Expert-Guided.",
    description:
      "Whether it's digital transformation or technology roadmapping, our consultancy services are grounded in deep expertise that's practical, results-driven & focused on maximizing your ROI.",
    longDescription:
      "Our IT consultancy services help organizations navigate the complex technology landscape with confidence. We provide strategic guidance, technical expertise, and hands-on support to help you make informed decisions that drive business value and competitive advantage.",
    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
    features: [
      {
        title: "Digital Transformation",
        description:
          "Strategic roadmaps for modernizing operations and embracing digital technologies.",
        icon: "trending-up",
      },
      {
        title: "Technology Assessment",
        description:
          "Comprehensive evaluation of your current IT landscape and recommendations.",
        icon: "search",
      },
      {
        title: "IT Strategy Development",
        description:
          "Long-term technology strategies aligned with your business objectives.",
        icon: "target",
      },
      {
        title: "Vendor Selection",
        description:
          "Expert guidance in selecting the right technology partners and solutions.",
        icon: "users",
      },
    ],
    benefits: [
      "Informed technology investment decisions",
      "Reduced risk in IT initiatives",
      "Accelerated digital transformation",
      "Optimized IT spending and ROI",
      "Access to specialized expertise",
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description:
          "Understanding your business context, challenges, and strategic objectives.",
      },
      {
        step: 2,
        title: "Analysis",
        description:
          "Deep dive into your current state and identification of opportunities.",
      },
      {
        step: 3,
        title: "Recommendations",
        description:
          "Actionable recommendations with clear priorities and implementation roadmap.",
      },
      {
        step: 4,
        title: "Implementation Support",
        description:
          "Hands-on guidance and support throughout the execution phase.",
      },
    ],
    useCases: [
      "Digital transformation initiatives",
      "IT infrastructure optimization",
      "Cloud strategy development",
      "Cybersecurity assessment",
      "Technology due diligence",
    ],
    technologies: [
      "TOGAF",
      "ITIL",
      "Agile",
      "DevOps",
      "Cloud Platforms",
      "Security Frameworks",
    ],
  },
  {
    id: "hardware-solutions",
    slug: "hardware-solutions",
    label: "Hardware Maintenance",
    title: "Hardware Solutions & Support",
    tagline: "From Repairs To Upgrades, All Professionally Handled.",
    description:
      "Whether it's preventive maintenance or emergency support, our hardware services are delivered with technical precision that's reliable, timely & keeps your infrastructure running at peak performance.",
    longDescription:
      "We provide comprehensive hardware solutions and maintenance services to keep your IT infrastructure running smoothly. From procurement and installation to ongoing maintenance and emergency repairs, our certified technicians ensure your hardware investments deliver maximum value.",
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    features: [
      {
        title: "Hardware Procurement",
        description:
          "Expert guidance in selecting and sourcing the right hardware for your needs.",
        icon: "shopping-cart",
      },
      {
        title: "Installation & Setup",
        description:
          "Professional installation and configuration of servers, networks, and workstations.",
        icon: "tool",
      },
      {
        title: "Preventive Maintenance",
        description:
          "Scheduled maintenance programs to prevent failures and extend equipment life.",
        icon: "shield",
      },
      {
        title: "Emergency Repairs",
        description:
          "Rapid response support for critical hardware failures and issues.",
        icon: "zap",
      },
    ],
    benefits: [
      "Minimized downtime and disruptions",
      "Extended hardware lifespan",
      "Reduced total cost of ownership",
      "Expert technical support on demand",
      "Proactive issue prevention",
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description:
          "Evaluation of your current hardware infrastructure and requirements.",
      },
      {
        step: 2,
        title: "Planning",
        description:
          "Customized maintenance plan or upgrade strategy based on your needs.",
      },
      {
        step: 3,
        title: "Execution",
        description:
          "Professional implementation with minimal disruption to operations.",
      },
      {
        step: 4,
        title: "Ongoing Support",
        description:
          "Continuous monitoring, maintenance, and responsive support.",
      },
    ],
    useCases: [
      "Server infrastructure management",
      "Network equipment maintenance",
      "Workstation deployment",
      "CCTV system installation",
      "Data center support",
    ],
    technologies: [
      "Dell",
      "HP",
      "Cisco",
      "Lenovo",
      "Hikvision",
      "Ubiquiti",
      "APC",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug);
}
