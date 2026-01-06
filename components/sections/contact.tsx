"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface ContactSectionProps {
  title?: string;
}

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const HCAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || "";

export function ContactSection({
  title = "We are always here to help",
}: ContactSectionProps) {
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [submitStatus, setSubmitStatus] = React.useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [hcaptchaToken, setHcaptchaToken] = React.useState<string | null>(null);
  const hcaptchaRef = useRef<HCaptcha>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleHCaptchaVerify = (token: string) => {
    setHcaptchaToken(token);
    setErrorMessage("");
  };

  const handleHCaptchaExpire = () => {
    setHcaptchaToken(null);
  };

  const handleHCaptchaError = () => {
    setHcaptchaToken(null);
    setErrorMessage("Verification failed. Please try again.");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      setErrorMessage("Please accept the privacy policy to continue.");
      setSubmitStatus("error");
      return;
    }

    if (!hcaptchaToken) {
      setErrorMessage("Please complete the verification.");
      setSubmitStatus("error");
      return;
    }

    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          hcaptchaToken: hcaptchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.errors?.[0] || "Failed to send message");
      }

      setSubmitStatus("success");
      // Reset form after success
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
      });
      setHcaptchaToken(null);
      hcaptchaRef.current?.resetCaptcha();
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
      // Reset captcha on error so user can try again
      setHcaptchaToken(null);
      hcaptchaRef.current?.resetCaptcha();
    }
  };

  const isSubmitDisabled =
    submitStatus === "loading" || !hcaptchaToken || !formData.consent;

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Custom Font */}
      <style jsx global>{`
        @font-face {
          font-family: "NewFont";
          src: url("/fonts/newfont.woff2") format("woff2");
          font-weight: 100 900;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Title & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#1a2b4a] leading-[1.1] mb-12 lg:mb-0"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              {title}
            </h1>

            {/* Contact Information */}
            <div
              className="space-y-8"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              {/* General Enquiries */}
              <div>
                <h3 className="text-sm font-bold text-[#1a2b4a] mb-2">
                  General Enquiries
                </h3>
                <a
                  href="mailto:info@upright.ph"
                  className="block text-sm text-[#1a2b4a]/80 hover:text-[#0000ff] transition-colors"
                >
                  info@upright.ph
                </a>
                <p className="text-sm text-[#1a2b4a]/80">+63 917 123 4567</p>
              </div>

              {/* Customer Support */}
              <div>
                <h3 className="text-sm font-bold text-[#1a2b4a] mb-2">
                  Customer Support
                </h3>
                <a
                  href="mailto:support@upright.ph"
                  className="block text-sm text-[#1a2b4a]/80 hover:text-[#0000ff] transition-colors"
                >
                  support@upright.ph
                </a>
                <p className="text-sm text-[#1a2b4a]/80">+63 917 765 4321</p>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-sm font-bold text-[#1a2b4a] mb-2">
                  Address
                </h3>
                <p className="text-sm text-[#1a2b4a]/80 leading-relaxed">
                  Upright Solutions and Systems
                  <br />
                  Consultancy Corp.
                  <br />
                  Manila, Philippines
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg p-6 md:p-8 shadow-sm"
          >
            {submitStatus === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3
                  className="text-xl font-semibold text-[#1a2b4a] mb-2"
                  style={{ fontFamily: "NewFont, sans-serif" }}
                >
                  Message Sent Successfully!
                </h3>
                <p
                  className="text-sm text-gray-600 mb-6"
                  style={{ fontFamily: "NewFont, sans-serif" }}
                >
                  Thank you for reaching out. We've sent a confirmation to your
                  email.
                  <br />
                  Our team will get back to you within 1–2 business days.
                </p>
                <Button
                  onClick={() => setSubmitStatus("idle")}
                  className="h-10 px-6 text-sm font-medium bg-[#1a2b4a] text-white hover:bg-[#0f1a2e] rounded-full transition-colors"
                  style={{ fontFamily: "NewFont, sans-serif" }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Error Message */}
                {submitStatus === "error" && errorMessage && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <p
                      className="text-sm text-red-600"
                      style={{ fontFamily: "NewFont, sans-serif" }}
                    >
                      {errorMessage}
                    </p>
                  </div>
                )}

                {/* Name & Company Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="text-xs text-gray-500"
                      style={{ fontFamily: "NewFont, sans-serif" }}
                    >
                      Your name<span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Juan Dela Cruz"
                      value={formData.name}
                      onChange={handleChange}
                      className="h-11 text-sm border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1a2b4a] focus:ring-0 transition-colors rounded-md"
                      style={{ fontFamily: "NewFont, sans-serif" }}
                      required
                      disabled={submitStatus === "loading"}
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="company"
                      className="text-xs text-gray-500"
                      style={{ fontFamily: "NewFont, sans-serif" }}
                    >
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder=""
                      value={formData.company}
                      onChange={handleChange}
                      className="h-11 text-sm border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1a2b4a] focus:ring-0 transition-colors rounded-md"
                      style={{ fontFamily: "NewFont, sans-serif" }}
                      disabled={submitStatus === "loading"}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="text-xs text-gray-500"
                    style={{ fontFamily: "NewFont, sans-serif" }}
                  >
                    Email Address<span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="juandelacruz@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-11 text-sm border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1a2b4a] focus:ring-0 transition-colors rounded-md"
                    style={{ fontFamily: "NewFont, sans-serif" }}
                    required
                    disabled={submitStatus === "loading"}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="phone"
                    className="text-xs text-gray-500"
                    style={{ fontFamily: "NewFont, sans-serif" }}
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+63 912 3456 789"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-11 text-sm border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1a2b4a] focus:ring-0 transition-colors rounded-md"
                    style={{ fontFamily: "NewFont, sans-serif" }}
                    disabled={submitStatus === "loading"}
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="message"
                    className="text-xs text-gray-500"
                    style={{ fontFamily: "NewFont, sans-serif" }}
                  >
                    How can we help?<span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enquiry details"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[120px] text-sm border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1a2b4a] focus:ring-0 transition-colors resize-none rounded-md"
                    style={{ fontFamily: "NewFont, sans-serif" }}
                    required
                    disabled={submitStatus === "loading"}
                  />
                </div>

                {/* hCaptcha */}
                <div className="space-y-2">
                  <p
                    className="text-xs font-semibold text-[#1a2b4a]"
                    style={{ fontFamily: "NewFont, sans-serif" }}
                  >
                    Verification<span className="text-red-500">*</span>
                  </p>
                  {HCAPTCHA_SITE_KEY && (
                    <HCaptcha
                      ref={hcaptchaRef}
                      sitekey={HCAPTCHA_SITE_KEY}
                      onVerify={handleHCaptchaVerify}
                      onExpire={handleHCaptchaExpire}
                      onError={handleHCaptchaError}
                    />
                  )}
                  {hcaptchaToken && (
                    <p className="text-xs text-green-600 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </p>
                  )}
                </div>

                {/* Consent */}
                <div className="space-y-2">
                  <p
                    className="text-xs font-semibold text-[#1a2b4a]"
                    style={{ fontFamily: "NewFont, sans-serif" }}
                  >
                    Consent
                  </p>
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-0.5 w-4 h-4 border border-gray-300 rounded accent-[#1a2b4a] cursor-pointer"
                      required
                      disabled={submitStatus === "loading"}
                    />
                    <label
                      htmlFor="consent"
                      className="text-xs text-gray-600 leading-relaxed cursor-pointer"
                      style={{ fontFamily: "NewFont, sans-serif" }}
                    >
                      I agree to the{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-[#1a2b4a] underline hover:no-underline"
                      >
                        privacy policy
                      </Link>
                      .
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitDisabled}
                  className="h-10 px-6 text-sm font-medium bg-[#1a2b4a] text-white hover:bg-[#0f1a2e] rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "NewFont, sans-serif" }}
                >
                  {submitStatus === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
