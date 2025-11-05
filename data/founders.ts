export interface Founder {
  name: string;
  title: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
  galleryImages: {
    title: string;
    url: string;
  }[];
}

export const founder: Founder = {
  name: "Gregory Nick Sevilla",
  title: "CEO & Founder ",
  role: "Chief Executive Officer",
  image: "/images/founders/greg-sevilla.jpg",
  bio: "Greg Sevilla is a seasoned maritime leader and entrepreneur, currently serving as the Managing Director of Avior Marine Inc. His journey began humbly as a cadet — a path that shaped his deep understanding of both the challenges and opportunities within the maritime industry. Through years of dedication, he rose to the rank of Master in 2015, and later expanded his expertise internationally as a Marine Superintendent in the Netherlands and Germany, before returning to support Avior as a business consultant.\n\nBeyond Avior, Greg leads several companies under the Oceanwide Group, offering services in maritime training, consultancy, marine surveying, auditing, and inspection. He holds two bachelor's degrees — one in Information Technology and another in Marine Transportation — and earned his Master's degree in Shipping Management from the Philippine Merchant Marine Academy (PMMA) Graduate School.\n\nA respected voice in the industry, he serves as a Trustee of the Association of Licensed Manning Agencies (ALMA) since its founding, and as a member of the Technical Panel for Maritime Education under MARINA and CHED.",
  socials: {
    linkedin: "https://www.linkedin.com/in/gregsevilla/",
    facebook: "https://www.facebook.com/CapGregSevilla",
    instagram:
      "https://www.instagram.com/gregorynicksevilla?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  galleryImages: [
    {
      title: "Captain Greg Sevilla",
      url: "/images/founders/capsevilla.jpg",
    },
    {
      title: "Greg Sevilla - Leadership",
      url: "/images/founders/capsevilla1.jpg",
    },
    {
      title: "Greg Sevilla - Professional",
      url: "/images/founders/capsevilla2.jpg",
    },
    {
      title: "Greg Sevilla - Vision",
      url: "/images/founders/capsevilla3.jpg",
    },
    {
      title: "Greg Sevilla - Innovation",
      url: "/images/founders/capsevilla4.jpg",
    },
    {
      title: "Greg Sevilla - Excellence",
      url: "/images/founders/capsevilla5.jpg",
    },
    {
      title: "Greg Sevilla - Founder",
      url: "/images/founders/capsevilla6.jpg",
    },
    {
      title: "Greg Sevilla - Founder",
      url: "/images/founders/capsevilla7.jpg",
    },
    {
      title: "Greg Sevilla - Founder",
      url: "/images/founders/capsevilla8.jpg",
    },
    {
      title: "Greg Sevilla - Founder",
      url: "/images/founders/capsevilla9.jpg",
    },
    {
      title: "Upright Systems - Recognition",
      url: "/images/founders/plaque.jpg",
    },
  ],
};
