"use client"

import { ProfessionalNavbar } from "@/components/layout/navbar-professional"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/layout/footer"

export default function ContactPage() {
  const handleFormSubmit = (data: any) => {
    // In production, this would send data to your API endpoint
    console.log("Contact form submitted:", data)
    // You can add API call here, e.g.:
    // fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
  }

  return (
    <div className="relative min-h-screen">
      <ProfessionalNavbar />
      <ContactSection onSubmit={handleFormSubmit} />
      <Footer />
    </div>
  )
}
