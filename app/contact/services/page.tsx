"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ProfessionalNavbar } from "@/components/layout/navbar-professional";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";

export default function ServicesContactPage() {
  const [formData, setFormData] = useState({
    projectDescription: "",
    budget: "",
    firstName: "",
    lastName: "",
    workEmail: "",
    jobTitle: "",
    phoneNumber: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: "#faf8ed" }}
    >
      <ProfessionalNavbar />

      <div className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Left Side - Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-12 flex flex-col justify-between"
          >
            {/* Product Image */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
                  alt="Dashboard Preview"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-12">
              <p className="text-sm text-gray-600 text-center mb-6">
                Trusted by over 100,000+ high-performing teams
              </p>
              <div className="grid grid-cols-4 gap-4 opacity-60">
                <div className="text-center text-xs font-semibold text-gray-700">
                  COMPANY
                </div>
                <div className="text-center text-xs font-semibold text-gray-700">
                  BRAND
                </div>
                <div className="text-center text-xs font-semibold text-gray-700">
                  PARTNER
                </div>
                <div className="text-center text-xs font-semibold text-gray-700">
                  CLIENT
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-12 bg-white"
          >
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-black mb-2">
                Turn your vision into reality
              </h1>
              <p className="text-gray-600">
                Upright Systems delivers powerful IT solutions tailored to your
                business in just a few short weeks.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Project Description */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  What do you want to build?
                </label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Please describe your project with as much detail as possible."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  What's your total project budget (in PHP)?*
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["10k to 20k", "20k to 50k", "Over 50k"].map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, budget }))
                      }
                      className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                        formData.budget === budget
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  How can we reach you?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name*"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name*"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Work email*
                </label>
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Job Title*
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Job Title"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Phone number (optional)
                </label>
                <div className="flex gap-2">
                  <select className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>US</option>
                    <option>PH</option>
                    <option>UK</option>
                  </select>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="(000) 000-0000"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  required
                />
                <p className="text-xs text-gray-600">
                  I agree to receive personalized text messages at the phone
                  number provided. Msg & data rates may apply. Msg frequency
                  varies. Reply HELP for help and STOP to cancel. View our{" "}
                  <a href="#" className="text-blue-600 underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Submit
              </button>

              <p className="text-xs text-center text-gray-500">
                By clicking submit, you agree to our{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 underline">
                  Privacy Statement
                </a>
                .
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
