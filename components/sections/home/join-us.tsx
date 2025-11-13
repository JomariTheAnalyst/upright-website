"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import React from "react";

export default function JoinUsSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partnership form submitted:", formData);
    // Handle form submission
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets%2Fdf86a2c927524359b1806962d7ea4653%2Fc7867a4062de4657bd723d616e0a69d8"
          alt="Join us background"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-yellow-200 font-bold leading-tight">
              Take us on your next adventure!
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 max-w-xl">
              Partner with us to transform your business with innovative IT
              solutions — your ultimate technology companion.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-yellow-300 text-black hover:bg-white/90 px-8 py-6 text-base font-semibold rounded-lg"
              >
                Become a Partner
              </Button>
            </div>
          </motion.div>

          {/* Right Side - Partnership Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border-2 border-white/30">
              <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">
                Partner With Us
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Two Column Layout for Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-white drop-shadow-md"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="h-11 text-base rounded-md bg-white/30 border-white/40 text-white placeholder:text-white/70 shadow-sm transition-all duration-200 hover:bg-white/40 hover:border-white/60 focus-visible:bg-white/40 focus-visible:border-yellow-400 focus-visible:ring-yellow-400 focus-visible:ring-2"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-white drop-shadow-md"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="h-11 text-base rounded-md bg-white/30 border-white/40 text-white placeholder:text-white/70 shadow-sm transition-all duration-200 hover:bg-white/40 hover:border-white/60 focus-visible:bg-white/40 focus-visible:border-yellow-400 focus-visible:ring-yellow-400 focus-visible:ring-2"
                      required
                    />
                  </div>
                </div>

                {/* Two Column Layout for Company and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Company */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="company"
                      className="text-sm font-medium text-white drop-shadow-md"
                    >
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                      className="h-11 text-base rounded-md bg-white/30 border-white/40 text-white placeholder:text-white/70 shadow-sm transition-all duration-200 hover:bg-white/40 hover:border-white/60 focus-visible:bg-white/40 focus-visible:border-yellow-400 focus-visible:ring-yellow-400 focus-visible:ring-2"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-white drop-shadow-md"
                    >
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+63 XXX XXX XXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-11 text-base rounded-md border-gray-300 shadow-sm transition-all duration-200 hover:border-gray-400 focus-visible:border-yellow-400 focus-visible:ring-yellow-400 focus-visible:ring-2"
                      required
                    />
                  </div>
                </div>

                {/* Message - Full Width */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-white drop-shadow-md"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your partnership interest..."
                    className="min-h-[120px] text-base rounded-md bg-white/30 border-white/40 text-white placeholder:text-white/70 shadow-sm transition-all duration-200 hover:bg-white/40 hover:border-white/60 focus-visible:bg-white/40 focus-visible:border-yellow-400 focus-visible:ring-yellow-400 focus-visible:ring-2"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-11 text-base bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-md shadow-md transition-all duration-200 hover:shadow-lg"
                  size="lg"
                >
                  Submit
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
