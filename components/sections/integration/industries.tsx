"use client"

import { motion } from "framer-motion"
import { 
  Zap, 
  Building2, 
  GraduationCap, 
  Landmark, 
  Ship, 
  Hospital,
  ShoppingCart,
  Factory
} from "lucide-react"

export function IntegrationIndustries() {
  const industries = [
    { icon: Zap, name: "Energy", color: "text-yellow-500" },
    { icon: Building2, name: "Banking", color: "text-blue-500" },
    { icon: GraduationCap, name: "Education", color: "text-purple-500" },
    { icon: Landmark, name: "Government", color: "text-red-500" },
    { icon: Ship, name: "Maritime", color: "text-cyan-500" },
    { icon: Hospital, name: "Healthcare", color: "text-green-500" },
    { icon: ShoppingCart, name: "Retail", color: "text-orange-500" },
    { icon: Factory, name: "Manufacturing", color: "text-gray-500" }
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Industries We{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Serve
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering tailored integration solutions across diverse sectors
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className={`w-8 h-8 ${industry.color}`} />
                </div>
                <h3 className="font-semibold text-lg">{industry.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
