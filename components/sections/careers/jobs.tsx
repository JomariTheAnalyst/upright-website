"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Search, MapPin, Briefcase } from "lucide-react";

const jobCategories = [
  { name: "All teams", count: 45 },
  { name: "Engineering", count: 18 },
  { name: "Product & Design", count: 8 },
  { name: "Marketing & Sales", count: 6 },
  { name: "Operations", count: 5 },
  { name: "Finance", count: 4 },
  { name: "Legal", count: 2 },
  { name: "People & Culture", count: 2 },
];

const featuredJobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    office: "Manila · Cebu · Remote",
    remote: "Remote: Philippines",
    category: "Engineering",
  },
  {
    id: 2,
    title: "Product Manager",
    office: "Manila",
    remote: "Remote: Philippines · Hybrid",
    category: "Product & Design",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    office: "Manila · Remote",
    remote: "Remote: Philippines",
    category: "Engineering",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    office: "Manila",
    remote: "Remote: Philippines · Hybrid",
    category: "Product & Design",
  },
  {
    id: 5,
    title: "Marketing Manager",
    office: "Manila · Cebu",
    remote: "Remote: Philippines",
    category: "Marketing & Sales",
  },
  {
    id: 6,
    title: "Business Analyst",
    office: "Manila",
    remote: "Hybrid: Philippines",
    category: "Operations",
  },
];

export function JobsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All teams");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = featuredJobs.filter((job) => {
    const matchesCategory =
      selectedCategory === "All teams" || job.category === selectedCategory;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.office.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="jobs-section" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            We have {featuredJobs.length} open positions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            The future of technology is here. Be the one who creates it
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex flex-col md:flex-row gap-4"
        >
          {/* Location Dropdown */}
          <div className="relative">
            <select className="w-full md:w-64 px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-700">
              <option>Location</option>
              <option>Manila</option>
              <option>Cebu</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
            <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          {/* Search Input */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder={`Search from ${featuredJobs.length} open positions`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-700"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filter by teams */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Filter by teams
            </h3>
            <div className="space-y-2">
              {jobCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.name
                      ? "bg-yellow-400 text-gray-900 font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category.name} · {category.count}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Job Listings */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Featured roles
            </h3>
            <div className="space-y-4">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-6 transition-all duration-300 cursor-pointer group"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {job.title}
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>Office: {job.office}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.remote}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Show More Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 text-center"
            >
              <button className="inline-flex items-center gap-2 px-6 py-3 text-gray-900 font-semibold hover:text-yellow-600 transition-colors">
                Show more
                <span className="text-xl">→</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
