export interface EventItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  image: string;
  color: string;
  leadBy: string;
  inCoordinationWith: string;
  shortDescription: string;
  fullDescription: string;
  highlights?: string[];
  mission?: string;
}

export const eventsData: EventItem[] = [
  {
    id: "1",
    slug: "/events/avior-forward-program",
    title: "Avior Forward Program",
    date: "MARCH 25, 2025",
    readingTime: "4",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    color: "#0000ff",
    leadBy: "Upright Solutions and Systems Consultancy Corp.",
    inCoordinationWith: "Atria Learning and Development",
    shortDescription:
      "Marking the start of Avior Marine's leadership development journey.",
    fullDescription: `Upright Solutions and Systems Consultancy Corp., in coordination with Atria Learning, helped bring the Avior Forward Program to life — marking the start of Avior Marine's leadership development journey.

Through strong local coordination and on-ground execution, Upright delivered immersive workshops and leadership activities that strengthened trust, collaboration, and accountability across Avior's management team.`,
  },
  {
    id: "2",
    slug: "/events/seatrade-maritime-crew-connect-global-2025",
    title: "Seatrade Maritime Crew Connect Global 2025",
    date: "FEBRUARY 11, 2025",
    readingTime: "3",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
    color: "#ffdf20",
    leadBy: "Atria Learning and Development",
    inCoordinationWith: "Upright Solutions and Systems Consultancy Corp.",
    shortDescription:
      "Supporting Atria Learning's presence on the global maritime stage.",
    fullDescription: `At Seatrade Maritime Crew Connect Global 2025, Upright Solutions and Systems Consultancy Corp. worked closely with Atria Learning and Development to support its presence on the global stage.

Upright handled local coordination and on-site support for the Atria Learning booth — helping create meaningful conversations, stronger connections, and greater visibility for innovative learning and leadership solutions in the maritime industry.`,
  },
  {
    id: "3",
    slug: "/events/crew-forward-conference",
    title: "Crew Forward Conference",
    date: "JANUARY 13, 2025",
    readingTime: "5",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    color: "#0000ff",
    leadBy: "Atria Learning & Development",
    inCoordinationWith: "Upright Solutions and Systems Consultancy Corp.",
    shortDescription:
      "A learning-driven maritime conference designed to strengthen people, leadership, and collaboration.",
    fullDescription: `The Crew Forward Conference is a learning-driven maritime conference designed to strengthen people, leadership, and collaboration across the fleet and shore-based teams. Conducted every quarter of the year.

Led by Atria Learning & Development, in collaboration with Upright Solutions and Systems Consultancy Corp., Crew Forward brings together seafarers, officers, managers, and maritime professionals to reflect, learn, and move forward together.

Crew Forward focuses on the human side of maritime operations. It goes beyond technical skills by addressing leadership mindset, trust, communication, accountability, and teamwork in a multicultural and high-pressure environment.

Through interactive sessions, real-world scenarios, and shared experiences, participants are encouraged to reflect on their roles and responsibilities, strengthen leadership and interpersonal skills, improve collaboration between ship and shore, and build trust, professionalism, and shared ownership.`,
    highlights: [
      "Reflect on their roles and responsibilities",
      "Strengthen leadership and interpersonal skills",
      "Improve collaboration between ship and shore",
      "Build trust, professionalism, and shared ownership",
    ],
    mission: `The mission of the Crew Forward team is to empower maritime professionals to grow as individuals and leaders, while strengthening alignment, trust, and cooperation across the organization.

Atria Learning & Development leads the learning design and facilitation, ensuring that every session is practical, relevant, and grounded in real maritime experience. Upright Solutions and Systems Consultancy Corp. supports the program through coordination, execution, and systems thinking, bridging learning, people, and operational realities.

Together, the team is committed to creating a conference that:
• Puts people at the center of maritime excellence
• Encourages open dialogue and shared learning
• Supports long-term growth, not just short-term training
• Moves crews forward—confident, connected, and prepared

Crew Forward is more than a conference. It is a shared commitment to better leadership, stronger teams, and a more resilient maritime community.`,
  },
];

export default eventsData;
