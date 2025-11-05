"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactSectionProps {
  title?: string;
  mainMessage?: string;
  contactEmail?: string;
  backgroundImageSrc?: string;
  onSubmit?: (data: any) => void;
}

export function ContactSection({
  title = "Let's Build Your Digital Future Together",
  mainMessage = "Get in Touch",
  contactEmail = "info@uprightsystems.com",
  backgroundImageSrc = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  onSubmit,
}: ContactSectionProps) {
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
    onSubmit?.(formData);
    console.log("Form submitted:", formData);
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#faf8ed" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out opacity-5"
        style={{ backgroundImage: `url(${backgroundImageSrc})` }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-yellow-400/20 rounded-full animate-pulse"
              style={{
                width: `${Math.random() * 30 + 10}px`,
                height: `${Math.random() * 30 + 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 4 + 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen p-4 md:p-8 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full max-w-7xl">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                {title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Upright Systems Inc. has been delivering enterprise-scale IT
                solutions since 2015. Let us help transform your business with
                cutting-edge technology.
              </p>
            </div>

            <div className="space-y-6 pt-8">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  Email
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-2xl text-foreground hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors font-medium"
                >
                  {contactEmail}
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  Phone
                </p>
                <p className="text-2xl text-foreground font-medium">
                  +63 XXX XXX XXXX
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  Location
                </p>
                <p className="text-2xl text-foreground font-medium">
                  Philippines
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border-2 border-yellow-400/50">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              {mainMessage}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 text-base border-yellow-200 focus-visible:ring-yellow-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 text-base border-yellow-200 focus-visible:ring-yellow-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-base">
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="h-12 text-base border-yellow-200 focus-visible:ring-yellow-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+63 XXX XXX XXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 text-base border-yellow-200 focus-visible:ring-yellow-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-base">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  className="min-h-[160px] text-base border-yellow-200 focus-visible:ring-yellow-400"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
