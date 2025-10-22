import { Building2, Landmark, Phone, Heart, GraduationCap, Ship, Factory, ShoppingCart, Plane, Briefcase, Globe } from "lucide-react"

export function IndustriesSection() {
  const industries = [
    { name: "Government", icon: Building2 },
    { name: "Finance & Banking", icon: Landmark },
    { name: "Telecommunications", icon: Phone },
    { name: "Healthcare", icon: Heart },
    { name: "Education", icon: GraduationCap },
    { name: "Maritime", icon: Ship },
    { name: "Manufacturing", icon: Factory },
    { name: "Retail", icon: ShoppingCart },
    { name: "Transportation", icon: Plane },
    { name: "Corporate", icon: Briefcase },
    { name: "Technology", icon: Globe },
  ]

  return (
    <section id="industries" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by organizations across diverse sectors throughout the Philippines.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <div
                key={industry.name}
                className="flex flex-col items-center justify-center p-6 rounded-lg border-2 bg-card hover:border-primary hover:shadow-md transition-all group cursor-pointer"
              >
                <Icon className="h-10 w-10 mb-3 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-center">{industry.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
