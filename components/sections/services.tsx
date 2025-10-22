import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Network, Code, Users, Wrench } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "IT Integration & Consultancy",
      description: "Strategic IT planning and seamless system integration to optimize your business operations and technology infrastructure.",
      icon: Network,
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs, from web applications to enterprise systems.",
      icon: Code,
    },
    {
      title: "Professional Services",
      description: "Expert IT consulting, project management, and technical support to ensure your success at every stage.",
      icon: Users,
    },
    {
      title: "Hardware Maintenance",
      description: "Comprehensive hardware support and maintenance services to keep your systems running smoothly and efficiently.",
      icon: Wrench,
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions designed to drive innovation and growth for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
