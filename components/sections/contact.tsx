"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useImageUpload } from "@/hooks/use-image-upload";
import { ImagePlus, Upload, Trash2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
  backgroundImageSrc = "https://cdn.builder.io/api/v1/image/assets%2Fdf86a2c927524359b1806962d7ea4653%2F2f74933077d44b579526c57579ed8294",
  onSubmit,
}: ContactSectionProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    attachment: null as File | null,
  });

  const [isDragging, setIsDragging] = React.useState(false);

  const {
    previewUrl,
    fileName,
    fileInputRef,
    handleThumbnailClick,
    handleFileChange: handleImageChange,
    handleRemove,
  } = useImageUpload({
    onUpload: (url) => console.log("Uploaded image URL:", url),
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, attachment: file }));
    handleImageChange(e);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = React.useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const file = e.dataTransfer.files?.[0];
      if (file && fileInputRef.current) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        fileInputRef.current.files = dataTransfer.files;

        const fakeEvent = {
          target: fileInputRef.current,
        } as React.ChangeEvent<HTMLInputElement>;
        handleFileChange(fakeEvent);
      }
    },
    [handleFileChange, fileInputRef]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImageSrc})` }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen p-4 md:p-8 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full max-w-7xl">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                {title}
              </h1>
              <p className="text-xl text-white/90 max-w-lg leading-relaxed drop-shadow-md">
                Upright Systems Inc. has been delivering enterprise-scale IT
                solutions since 2015. Let us help transform your business with
                cutting-edge technology.
              </p>
            </div>

            <div className="space-y-6 pt-8">
              <div className="space-y-2">
                <p className="text-sm text-white/80 uppercase tracking-wider">
                  Email
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-2xl text-white hover:text-yellow-400 transition-colors font-medium drop-shadow-md"
                >
                  {contactEmail}
                </a>
              </div>

              <div className="space-y-2"></div>
            </div>
          </div>

          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl border-2 border-yellow-400/50">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              {mainMessage}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 text-base rounded-md border-gray-300 shadow-sm transition-all duration-200 hover:border-gray-400 focus-visible:border-[#3FC2C2] focus-visible:ring-[#3FC2C2] focus-visible:ring-2 focus-visible:shadow-[0_0_10px_rgba(63,194,194,0.3)]"
                  required
                />
              </div>

              {/* Company Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="company"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Company Name <span className="text-gray-400">(optional)</span>
                </Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={handleChange}
                  className="h-12 text-base rounded-md border-gray-300 shadow-sm transition-all duration-200 hover:border-gray-400 focus-visible:border-[#3FC2C2] focus-visible:ring-[#3FC2C2] focus-visible:ring-2 focus-visible:shadow-[0_0_10px_rgba(63,194,194,0.3)]"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 text-base rounded-md border-gray-300 shadow-sm transition-all duration-200 hover:border-gray-400 focus-visible:border-[#3FC2C2] focus-visible:ring-[#3FC2C2] focus-visible:ring-2 focus-visible:shadow-[0_0_10px_rgba(63,194,194,0.3)]"
                  required
                />
              </div>

              {/* Contact Number */}
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Contact Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+63 XXX XXX XXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 text-base rounded-md border-gray-300 shadow-sm transition-all duration-200 hover:border-gray-400 focus-visible:border-[#3FC2C2] focus-visible:ring-[#3FC2C2] focus-visible:ring-2 focus-visible:shadow-[0_0_10px_rgba(63,194,194,0.3)]"
                  required
                />
              </div>

              {/* Inquiry Type */}
              <div className="space-y-2">
                <Label
                  htmlFor="inquiryType"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Inquiry Type
                </Label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full h-12 px-3 text-base rounded-md border border-gray-300 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-[#3FC2C2] focus:ring-[#3FC2C2] focus:ring-2 focus:shadow-[0_0_10px_rgba(63,194,194,0.3)] focus:outline-none bg-white dark:bg-gray-800"
                  required
                >
                  <option value="">Select inquiry type</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="careers">Careers</option>
                  <option value="others">Others</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your inquiry..."
                  className="min-h-[140px] text-base rounded-md border-gray-300 shadow-sm transition-all duration-200 hover:border-gray-400 focus-visible:border-[#3FC2C2] focus-visible:ring-[#3FC2C2] focus-visible:ring-2 focus-visible:shadow-[0_0_10px_rgba(63,194,194,0.3)]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Attachment */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Attachment <span className="text-gray-400">(optional)</span>
                </Label>
                <Input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                {!previewUrl ? (
                  <div
                    onClick={handleThumbnailClick}
                    onDragOver={handleDragOver}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={cn(
                      "flex h-32 cursor-pointer flex-col items-center justify-center gap-3 rounded-md border-2 border-dashed border-gray-300 bg-gray-50/50 transition-all duration-200 hover:bg-gray-100/50 hover:border-[#3FC2C2]",
                      isDragging && "border-[#3FC2C2] bg-[#3FC2C2]/5"
                    )}
                  >
                    <div className="rounded-full bg-white p-2 shadow-sm">
                      <ImagePlus className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-700">
                        Click to select
                      </p>
                      <p className="text-xs text-gray-500">
                        or drag and drop file here
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="group relative h-32 overflow-hidden rounded-md border border-gray-300">
                      <Image
                        src={previewUrl}
                        alt="Preview"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <Button
                          type="button"
                          size="sm"
                          variant="secondary"
                          onClick={handleThumbnailClick}
                          className="h-8 w-8 p-0"
                        >
                          <Upload className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          variant="destructive"
                          onClick={handleRemove}
                          className="h-8 w-8 p-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    {fileName && (
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 truncate">
                        {fileName}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base bg-[#3FC2C2] hover:bg-[#35a8a8] text-white font-semibold rounded-md shadow-md transition-all duration-200 hover:shadow-lg"
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
