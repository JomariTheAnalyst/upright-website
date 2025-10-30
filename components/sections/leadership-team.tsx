"use client"

import Link from "next/link"

interface TeamMember {
  name: string
  role: string
  avatar: string
  link: string
}

const leadershipMembers: TeamMember[] = [
  {
    name: "John Doe",
    role: "Founder - CEO",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=826&h=1239&fit=crop",
    link: "https://www.linkedin.com/company/upright-solutions-and-systems-consultancy-corp/about/",
  },
  {
    name: "Jane Smith",
    role: "Co-Founder - CTO",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=826&h=1239&fit=crop",
    link: "https://www.linkedin.com/company/upright-solutions-and-systems-consultancy-corp/about/",
  },
  {
    name: "Michael Chen",
    role: "Chief Operations Officer",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=826&h=1239&fit=crop",
    link: "https://www.linkedin.com/company/upright-solutions-and-systems-consultancy-corp/about/",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Business Development",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=826&h=1239&fit=crop",
    link: "https://www.linkedin.com/company/upright-solutions-and-systems-consultancy-corp/about/",
  },
]

const engineeringMembers: TeamMember[] = [
  {
    name: "David Martinez",
    role: "Lead Software Engineer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=826&h=1239&fit=crop",
    link: "#",
  },
  {
    name: "Emily Wong",
    role: "Senior Systems Architect",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=826&h=1239&fit=crop",
    link: "#",
  },
  {
    name: "Robert Taylor",
    role: "DevOps Manager",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=826&h=1239&fit=crop",
    link: "#",
  },
  {
    name: "Lisa Anderson",
    role: "QA Lead",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=826&h=1239&fit=crop",
    link: "#",
  },
]

const marketingMembers: TeamMember[] = [
  {
    name: "James Wilson",
    role: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=826&h=1239&fit=crop",
    link: "#",
  },
  {
    name: "Amanda Lee",
    role: "Content Strategist",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=826&h=1239&fit=crop",
    link: "#",
  },
  {
    name: "Chris Brown",
    role: "Digital Marketing Manager",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=826&h=1239&fit=crop",
    link: "#",
  },
  {
    name: "Nicole Garcia",
    role: "Brand Manager",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=826&h=1239&fit=crop",
    link: "#",
  },
]

export function LeadershipTeam() {
  return (
    <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl border-t px-6">
        <span className="-ml-6 -mt-3.5 block w-max bg-gray-50 px-6 text-sm text-gray-600 dark:bg-gray-950 dark:text-gray-400">
          Team
        </span>

        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Our dream team
            </h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p className="text-gray-600 dark:text-gray-400">
              During the working process, we perform regular fitting with the client because he is
              the only person who can feel whether a new suit fits or not.
            </p>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mt-12 md:mt-24">
          <h3 className="mb-6 text-lg font-medium text-gray-900 dark:text-white">Leadership</h3>
          <div className="grid gap-x-6 gap-y-12 border-t pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadershipMembers.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <img
                  className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                  src={member.avatar}
                  alt={member.name}
                  width="826"
                  height="1239"
                  loading="lazy"
                />
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-base font-medium text-gray-900 transition-all duration-500 group-hover:tracking-wider dark:text-white">
                      {member.name}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      _0{index + 1}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="inline-block translate-y-6 text-sm text-gray-600 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:text-gray-400">
                      {member.role}
                    </span>
                    <Link
                      href={member.link}
                      className="inline-block translate-y-8 text-sm tracking-wide text-gray-900 opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:text-yellow-600 group-hover:opacity-100 dark:text-white dark:group-hover:text-yellow-400"
                    >
                      LinkedIn
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Section */}
        <div className="mt-12">
          <h3 className="mb-6 text-lg font-medium text-gray-900 dark:text-white">Engineering</h3>
          <div className="grid gap-x-6 gap-y-12 border-t pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {engineeringMembers.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <img
                  className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                  src={member.avatar}
                  alt={member.name}
                  width="826"
                  height="1239"
                  loading="lazy"
                />
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-base font-medium text-gray-900 transition-all duration-500 group-hover:tracking-wider dark:text-white">
                      {member.name}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      _0{index + 1}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="inline-block translate-y-6 text-sm text-gray-600 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:text-gray-400">
                      {member.role}
                    </span>
                    <Link
                      href={member.link}
                      className="inline-block translate-y-8 text-sm tracking-wide text-gray-900 opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:text-yellow-600 group-hover:opacity-100 dark:text-white dark:group-hover:text-yellow-400"
                    >
                      Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing Section */}
        <div className="mt-12">
          <h3 className="mb-6 text-lg font-medium text-gray-900 dark:text-white">Marketing</h3>
          <div className="grid gap-x-6 gap-y-12 border-t pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {marketingMembers.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <img
                  className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                  src={member.avatar}
                  alt={member.name}
                  width="826"
                  height="1239"
                  loading="lazy"
                />
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-base font-medium text-gray-900 transition-all duration-500 group-hover:tracking-wider dark:text-white">
                      {member.name}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      _0{index + 1}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="inline-block translate-y-6 text-sm text-gray-600 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:text-gray-400">
                      {member.role}
                    </span>
                    <Link
                      href={member.link}
                      className="inline-block translate-y-8 text-sm tracking-wide text-gray-900 opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:text-yellow-600 group-hover:opacity-100 dark:text-white dark:group-hover:text-yellow-400"
                    >
                      Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
