import { Search, Palette, Code2, Rocket, Settings } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Scoping",
      description: "Understanding your business needs, challenges, and objectives to define the project scope.",
      icon: Search,
    },
    {
      number: "02",
      title: "Design",
      description: "Creating comprehensive technical designs and user experiences that align with your vision.",
      icon: Palette,
    },
    {
      number: "03",
      title: "Development",
      description: "Building robust, scalable solutions using modern technologies and best practices.",
      icon: Code2,
    },
    {
      number: "04",
      title: "Delivery",
      description: "Seamless deployment and implementation with thorough testing and quality assurance.",
      icon: Rocket,
    },
    {
      number: "05",
      title: "Maintenance",
      description: "Ongoing support, updates, and optimization to ensure long-term success.",
      icon: Settings,
    },
  ]

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery from start to finish.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                <div className="flex gap-6 pb-12">
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-start gap-4 mb-2">
                      <Icon className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-lg">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
