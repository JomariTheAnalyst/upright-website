export const company = {
  name: "UPRIGHT SOLUTIONS AND SYSTEMS CONSULTANCY CORP.",
  formerName: "Upright Maritime Learning and Review Center Corp.",
  yearEstablished: "October 30, 2015",

  purpose: `Upright Solutions and Systems Consultancy Corp. was established to engage in the handling and management of computer data processing, including system design and analysis, software package development, programming, data communication, and other related professional services. The company also undertakes the development of digital learning platforms and learning content materials to support training and professional development initiatives.

The company further provides contract programming, IT consultancy, and hardware maintenance, and undertakes all acts necessary and proper to carry out its business objectives, without engaging in the telecommunications business, in accordance with its amended Articles of Incorporation (dated February 1, 2021).`,

  // Short descriptions for various uses
  shortDescription:
    "Upright Solutions and Systems Consultancy Corp. is a Philippine-based IT consultancy engaged in system design and integration, software development, data processing, and professional IT services, including digital learning platform and content development",

  tagline: "Quietly Supporting What Keeps Things Moving",

  // Core services
  services: [
    "Computer Data Processing",
    "System Design and Analysis",
    "Software Package Development",
    "Programming",
    "Data Communication",
    "Learning Content Development",
    "Contract Programming",
    "IT Consultancy",
    "Hardware Maintenance",
  ],

  // Contact info (placeholders - update with real info)
  contact: {
    email: "info@uprightsystems.com",
    phone: "",
    address: "Bacoor, Cavite 4102, Philippines",
  },

  // Social links (placeholders - update with real links)
  socials: {
    linkedin:
      "https://www.linkedin.com/company/upright-solutions-and-systems-consultancy-corp/about/",
    facebook:
      "https://www.facebook.com/p/Upright-Solutions-and-Systems-Consultancy-Corp-100088526657457/",
    instagram: "",
  },

  // Legal
  articlesOfIncorporationAmended: "February 1, 2021",

  // Awards & Recognition
  awards: [
    {
      title:
        "Certificate of Appreciation from the National Task Group for Returning Overseas Filipinos (One Health Pass)",
      description:
        "Awarded for vigorous involvement in implementing health and safety measures to contain the spread of COVID-19 through the development and provision of IT systems and protocols at airports, which processed approximately four (4) million passengers, enabling the Philippines to reopen its gates to international travelers during the pandemic.",
      highlights: [
        "Processed approximately 4 million passengers",
        "Enabled the Philippines to reopen its gates to international travelers during the pandemic",
        "Recognized for compliance with government policies and assistance in the safe management of international arriving passengers",
      ],
      issuedDate: "July 2, 2022",
      issuedLocation: "The Villamor Air Base Golf Club, Pasay City",
      issuedBy: "National Task Group for Returning Overseas Filipinos",
    },
  ],
};

export type Company = typeof company;
