import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Target, Users } from "lucide-react"

export function AboutSection() {
  const milestones = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Started as a maritime learning platform, pioneering digital education in the maritime industry.",
      icon: Calendar,
    },
    {
      year: "2018",
      title: "Expansion",
      description: "Evolved into a comprehensive IT solutions provider, serving multiple industries nationwide.",
      icon: Target,
    },
    {
      year: "2025",
      title: "Today",
      description: "Leading IT system integration and software development company trusted by enterprises across the Philippines.",
      icon: Users,
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From maritime education to enterprise IT solutions, our commitment to understanding 
            client and customer needs has driven our evolution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {milestones.map((milestone) => {
            const Icon = milestone.icon
            return (
              <Card key={milestone.year} className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
