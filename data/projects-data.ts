export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  category: "software" | "hardware" | "consulting";
  highlights?: string[];
  client?: string;
  partner?: string;
  recognition?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "1",
    slug: "/projects/mycado",
    title: "MyCaDO",
    shortDescription:
      "Maritime learning solutions for onboard and shore-based staff training.",
    fullDescription: `The MyCaDO project is part of the Interreg VI-A Deutschland–Nederland Programme and is co-financed with €1.73 million by the European Union, the Ministry of Lower Saxony (MB Niedersachsen), and the provinces of Groningen, Fryslân, and Drenthe.

As part of the Upright team working alongside Atria, the company provides support in building engaging, practical, and audience-driven learning content designed for both onboard and shore-based staff.

The project addresses the evolving needs of the maritime industry by creating digital learning pathways that align with international maritime standards while remaining accessible and engaging for seafarers at all career stages.`,
    image: "/images/projects/mycado.png",
    category: "software",
    partner: "Atria Learning and Development",
    highlights: [
      "Development of practical and transferable learning frameworks",
      "Clarification of career development pathways from Cadet to Captain/Chief Engineer",
      "Structured alignment of learning levels from basic to experiential and practical",
      "Supported the digital transition of regulatory and STCW training",
      "Delivered solutions applicable across platform, program, course, and tool levels",
      "EU-funded initiative with cross-border collaboration between Germany and Netherlands",
    ],
  },
  {
    id: "2",
    slug: "/projects/myavior",
    title: "MyAvior",
    shortDescription:
      "Digital learning platforms and learning content development solutions for maritime professionals.",
    fullDescription: `MyAvior is a centralized learning platform for Avior Marine, designed to support the training and development of both seafarers and office staff by providing easy access to courses, learning resources, and professional development tools.

The platform enables seamless learning experiences with features including course tracking, progress monitoring, certification management, and personalized learning paths tailored to individual career goals.

Built with a user-centric approach, MyAvior ensures that maritime professionals can access training materials anytime, anywhere, supporting continuous professional development across the fleet.`,
    image: "/images/projects/myavior.png",
    category: "software",
    client: "Avior Marine",
    highlights: [
      "Centralized learning management system for maritime professionals",
      "Mobile-responsive design for access on ships and shore",
      "Progress tracking and certification management",
      "Personalized learning paths based on career progression",
      "Integration with existing HR and fleet management systems",
    ],
  },
  {
    id: "3",
    slug: "/projects/avior-lms",
    title: "Avior LMS",
    shortDescription:
      "Learning management system for structured training and compliance tracking.",
    fullDescription: `Avior LMS is a comprehensive learning management system for Avior Marine, designed to deliver structured training, track learning progress, and support compliance and professional development for both seafarers and office staff.

The system provides administrators with powerful tools to create, assign, and monitor training programs while ensuring that all personnel meet regulatory requirements and industry standards.

With robust reporting capabilities, Avior LMS enables data-driven decisions about training effectiveness and workforce development, helping Avior Marine maintain a highly skilled and compliant crew.`,
    image: "/images/projects/myavior.png",
    category: "software",
    client: "Avior Marine",
    highlights: [
      "Comprehensive compliance tracking for maritime regulations",
      "Automated training assignment and deadline management",
      "Advanced reporting and analytics dashboard",
      "Certificate generation and expiry tracking",
      "Multi-language support for international crews",
      "Offline access capabilities for use at sea",
    ],
  },
  {
    id: "4",
    slug: "/projects/one-health-pass",
    title: "One Health Pass",
    shortDescription:
      "Digital health verification for international travelers entering the Philippines.",
    fullDescription: `Upright Solutions and Systems Consultancy Corp. received formal recognition for its contribution to the One Health Pass (OHP) Project, a national initiative led by the Philippine government to support public health, safety, and border control measures during the COVID-19 pandemic.

The Plaque of Appreciation was awarded to Capt. Gregory Nick Sevilla, Owner of Upright Solutions and Systems Consultancy Corp., in recognition of his active involvement and support as part of the OSS-MROF team, contributing to the successful implementation and continuous improvement of the One Health Pass system.

The OHP was officially launched by the Bureau of Quarantine (BOQ) in accordance with World Health Organization (WHO) protocols to enable the safe and seamless movement of international travelers entering the Philippines, as affirmed by the Department of Health (Philippines).

This recognition highlights Upright's commitment to public service, inter-agency collaboration, and technology-enabled solutions, supporting national health initiatives and strengthening trust in government-led digital systems.`,
    image: "/images/projects/onehealthpass.jpg",
    category: "software",
    client: "Bureau of Quarantine (BOQ), Department of Health (Philippines)",
    recognition:
      "Plaque of Appreciation awarded to Capt. Gregory Nick Sevilla for contribution to the OHP Project",
    highlights: [
      "National-scale digital health verification system",
      "WHO-compliant health protocols integration",
      "Streamlined border control and quarantine processes",
      "Real-time health data validation and verification",
      "Secure handling of sensitive health information",
      "Inter-agency collaboration with government bodies",
    ],
  },
  {
    id: "5",
    slug: "/projects/gerrys-cctv",
    title: "Gerry's Restaurant CCTV Installation",
    shortDescription:
      "Complete CCTV surveillance system installation for Gerry's Restaurant branches ensuring security and monitoring.",
    fullDescription: `Upright Solutions and Systems Consultancy Corp. provided complete CCTV surveillance system installation services for Gerry's Restaurant branches, ensuring comprehensive security coverage and real-time monitoring capabilities across multiple locations.

The project involved site assessment, system design, equipment procurement, professional installation, and configuration of high-definition surveillance cameras with remote viewing capabilities.

Our team delivered a tailored security solution that addresses the unique requirements of each restaurant location, providing management with peace of mind and the ability to monitor operations remotely.`,
    image: "/images/projects/gerrys.png",
    category: "hardware",
    client: "Gerry's Restaurant",
    highlights: [
      "Multi-branch CCTV deployment and integration",
      "High-definition camera systems with night vision",
      "Remote viewing and mobile app access",
      "24/7 recording with extended storage capacity",
      "Professional installation and cable management",
      "Training for staff on system operation",
    ],
  },
  {
    id: "6",
    slug: "/projects/lbc-cctv",
    title: "LBC CCTV Installation",
    shortDescription:
      "Enterprise-grade CCTV security system deployment for LBC Express facilities and branches.",
    fullDescription: `Upright Solutions and Systems Consultancy Corp. deployed enterprise-grade CCTV security systems for LBC Express facilities and branches, providing robust surveillance infrastructure to support security operations and asset protection across their network.

The installation encompassed comprehensive coverage of customer service areas, loading bays, package handling zones, and exterior perimeters, ensuring complete visibility across critical operational areas.

Our enterprise solution includes advanced features such as motion detection, automatic alerts, and integration with existing security protocols, enabling LBC Express to maintain the highest standards of security for their logistics operations.`,
    image: "/images/projects/lbc.png",
    category: "hardware",
    client: "LBC Express",
    highlights: [
      "Enterprise-scale security infrastructure deployment",
      "Coverage of customer areas, loading bays, and perimeters",
      "Motion detection and automated alert systems",
      "Integration with existing security protocols",
      "Centralized monitoring for multiple locations",
      "Scalable architecture for future expansion",
    ],
  },
];

export default projectsData;
