"use client"

import { motion } from "motion/react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { MessageCircle, Mail, Phone } from "lucide-react"
import Link from "next/link"

const faqCategories = [
    {
        category: "General Questions",
        questions: [
            {
                question: "What services does Upright Systems Inc. provide?",
                answer: "We offer comprehensive IT solutions including System Integration, Software Development, Professional Services, Hardware Deployment, IT Consulting, Learning Management Systems (LMS), Maritime Training Solutions, and ongoing IT Support & Maintenance across multiple industries."
            },
            {
                question: "Which industries do you serve?",
                answer: "We have extensive experience serving 11+ industries including Government, Financial Services, Telecommunications, Healthcare, Energy & Mining, Maritime, Manufacturing, Hospitality, Logistics, Education, and Corporate sectors. Our diverse portfolio demonstrates our ability to adapt solutions to specific industry requirements."
            },
            {
                question: "Where is Upright Systems Inc. located?",
                answer: "We are based in Metro Manila, Philippines. While our headquarters is in the Philippines, we serve clients across the country and have experience working with international standards and best practices."
            },
            {
                question: "How long has Upright Systems been in business?",
                answer: "Upright Systems Inc. was established in 2015, originally as Upright Maritime Learning and Review Center Corp. Over the past 10 years, we've evolved from educational technology to a comprehensive IT solutions provider, completing 500+ projects with a 98% client satisfaction rate."
            }
        ]
    },
    {
        category: "Services & Solutions",
        questions: [
            {
                question: "What is included in your IT System Integration services?",
                answer: "Our system integration services include comprehensive analysis of your existing systems, custom integration solutions, API development and integration, database synchronization, legacy system modernization, cloud migration, and ongoing support to ensure all your systems work seamlessly together."
            },
            {
                question: "Do you provide custom software development?",
                answer: "Yes, we specialize in custom software development tailored to your specific business needs. This includes web applications, mobile apps, enterprise resource planning (ERP) systems, customer relationship management (CRM) platforms, inventory management systems, and industry-specific solutions."
            },
            {
                question: "What is your Learning Management System (LMS) solution?",
                answer: "Our LMS platform is a comprehensive online learning solution that includes course management, student tracking, assessment tools, certification management, interactive content delivery, progress analytics, and mobile accessibility. We've successfully deployed LMS solutions for educational institutions, corporate training, and professional certification programs."
            },
            {
                question: "Do you offer IT consulting services?",
                answer: "Absolutely. Our IT consulting services include technology assessment, digital transformation strategy, system architecture design, security audits, compliance consulting, technology roadmap planning, and vendor selection guidance. We work as strategic partners to help you make informed technology decisions."
            }
        ]
    },
    {
        category: "Project & Pricing",
        questions: [
            {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. Small projects (website development, simple integrations) typically take 4-8 weeks. Medium projects (custom software, LMS implementation) take 3-6 months. Large enterprise projects (full system integration, ERP deployment) can take 6-12 months. We provide detailed timelines during the consultation phase."
            },
            {
                question: "How do you price your services?",
                answer: "We offer flexible pricing models including fixed-price projects, time and materials, monthly retainers, and dedicated team arrangements. Pricing depends on project scope, complexity, timeline, and required resources. We provide transparent, detailed quotes after understanding your specific requirements during our free consultation."
            },
            {
                question: "Do you offer payment plans?",
                answer: "Yes, we offer flexible payment terms for larger projects. Typically, we structure payments in milestones: initial deposit (30%), development phases (40%), and final delivery (30%). For long-term projects, we can arrange monthly payment schedules. Terms are customized based on project size and client needs."
            },
            {
                question: "Is there a minimum project size or budget?",
                answer: "We work with businesses of all sizes. While we don't have a strict minimum, most of our projects start at ₱200,000 for small implementations. For smaller needs, we offer consulting services and can recommend appropriate solutions. Contact us to discuss your specific requirements and budget."
            }
        ]
    },
    {
        category: "Support & Maintenance",
        questions: [
            {
                question: "What kind of support do you provide after project completion?",
                answer: "We offer comprehensive post-deployment support including bug fixes during warranty period (typically 3-6 months), user training, documentation, technical support via phone/email, system monitoring, and optional maintenance contracts for ongoing support, updates, and enhancements."
            },
            {
                question: "Do you offer maintenance contracts?",
                answer: "Yes, we offer flexible maintenance and support contracts including monthly retainers for ongoing support, SLA-based support packages with guaranteed response times, proactive system monitoring, regular updates and patches, performance optimization, and priority support for critical issues."
            },
            {
                question: "What are your support hours?",
                answer: "Our standard support hours are Monday to Friday, 9:00 AM to 6:00 PM Philippine Time. For clients with maintenance contracts, we offer extended support hours and 24/7 emergency support for critical systems. Response times vary based on your support package and issue severity."
            },
            {
                question: "How do you handle system updates and upgrades?",
                answer: "We provide regular system updates including security patches, bug fixes, performance improvements, and feature enhancements. For major upgrades, we conduct thorough testing, create backup plans, schedule during low-traffic periods, and provide rollback procedures. All updates are documented and communicated in advance."
            }
        ]
    },
    {
        category: "Getting Started",
        questions: [
            {
                question: "How do I get started with Upright Systems?",
                answer: "Getting started is easy: 1) Contact us via phone, email, or our contact form. 2) Schedule a free consultation to discuss your needs. 3) Receive a detailed proposal and quote. 4) Sign the agreement and make initial payment. 5) Project kickoff with our team. We'll guide you through every step of the process."
            },
            {
                question: "What information do you need for a project quote?",
                answer: "To provide an accurate quote, we need: your business objectives, current systems and infrastructure, specific requirements and features needed, expected timeline, budget range, number of users, integration requirements, and any compliance or security needs. The more details you provide, the more accurate our quote will be."
            },
            {
                question: "Do you offer free consultations?",
                answer: "Yes, we offer a free initial consultation (typically 1-2 hours) where we discuss your needs, assess your current situation, provide preliminary recommendations, and outline potential solutions. This helps both parties determine if we're a good fit before committing to a project."
            },
            {
                question: "Can you work with our existing IT team?",
                answer: "Absolutely! We frequently collaborate with in-house IT teams. We can work as an extension of your team, provide specialized expertise for specific projects, offer training and knowledge transfer, or take full ownership of projects while coordinating with your team. We're flexible and adapt to your preferred working model."
            }
        ]
    },
    {
        category: "Technology & Security",
        questions: [
            {
                question: "What technologies do you work with?",
                answer: "We work with a wide range of modern technologies including: Web (React, Next.js, Node.js, PHP, .NET), Mobile (React Native, Flutter), Databases (PostgreSQL, MySQL, MongoDB), Cloud (AWS, Azure, Google Cloud), and various enterprise platforms. We stay current with industry trends and recommend the best technology stack for your specific needs."
            },
            {
                question: "How do you ensure data security?",
                answer: "Security is our top priority. We implement industry-standard security practices including encrypted data transmission (SSL/TLS), secure authentication and authorization, regular security audits, compliance with data protection regulations, secure coding practices, regular backups, and disaster recovery plans. We can also help you achieve specific compliance requirements (ISO, GDPR, etc.)."
            },
            {
                question: "Do you sign Non-Disclosure Agreements (NDAs)?",
                answer: "Yes, we're happy to sign NDAs to protect your confidential information. We understand the sensitive nature of business data and intellectual property. We have standard NDA templates, or we can review and sign your company's NDA before discussing project details."
            },
            {
                question: "Are your solutions scalable?",
                answer: "Yes, scalability is built into our solutions from the start. We design systems that can grow with your business, handle increasing user loads, accommodate new features and modules, integrate with additional systems, and scale infrastructure as needed. We use cloud technologies and modern architectures that support horizontal and vertical scaling."
            }
        ]
    }
]

export function FAQSection() {
    return (
        <section className="relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 sm:py-24 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-5xl">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-gray-900 dark:text-white mb-4">
                        Frequently Asked{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                            Questions
                        </span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl font-body text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Find answers to common questions about our services, pricing, support, and how we can help transform your business with innovative IT solutions.
                    </p>
                </motion.div>

                {/* FAQ Categories */}
                <div className="space-y-12">
                    {faqCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        >
                            {/* Category Title */}
                            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                <span className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-amber-500 rounded-full" />
                                {category.category}
                            </h2>

                            {/* Questions */}
                            <Accordion type="single" collapsible className="space-y-4">
                                {category.questions.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`${categoryIndex}-${index}`}
                                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-6 hover:border-yellow-400 dark:hover:border-yellow-500 transition-colors"
                                    >
                                        <AccordionTrigger className="text-left font-semibold font-ui text-gray-900 dark:text-white hover:text-yellow-600 dark:hover:text-yellow-400 py-5">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-600 dark:text-gray-400 font-body pb-5 leading-relaxed">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </motion.div>
                    ))}
                </div>

                {/* Still Have Questions CTA */}
                <motion.div
                    className="mt-16 md:mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-2xl p-8 md:p-12 border border-yellow-200 dark:border-yellow-800">
                        <h3 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-4">
                            Still Have Questions?
                        </h3>
                        <p className="text-base sm:text-lg font-body text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                            Can't find the answer you're looking for? Our team is here to help. Reach out to us and we'll get back to you as soon as possible.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/#contact">
                                <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-semibold font-ui rounded-lg shadow-lg hover:shadow-xl hover:from-yellow-500 hover:to-amber-600 transition-all duration-300">
                                    <MessageCircle className="w-5 h-5" />
                                    Contact Us
                                </button>
                            </Link>

                            <a href="mailto:info@uprightsystems.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold font-ui rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-yellow-400 dark:hover:border-yellow-500 transition-all duration-300">
                                <Mail className="w-5 h-5" />
                                Email Us
                            </a>

                            <a href="tel:+6328123456" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold font-ui rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-yellow-400 dark:hover:border-yellow-500 transition-all duration-300">
                                <Phone className="w-5 h-5" />
                                Call Us
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
