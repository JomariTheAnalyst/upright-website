import { ProfessionalNavbar } from "@/components/layout/navbar-professional"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Careers - Upright Systems Inc.",
  description: "Join our team at Upright Systems Inc. and build your career in IT solutions and enterprise technology.",
}

const jobOpenings = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Manila, Philippines",
    type: "Full-time",
    description: "We're looking for an experienced software engineer to join our development team and work on enterprise-scale applications.",
  },
  {
    id: 2,
    title: "IT Systems Integrator",
    department: "Integration",
    location: "Cebu, Philippines",
    type: "Full-time",
    description: "Join our integration team to design and implement complex IT infrastructure solutions for enterprise clients.",
  },
  {
    id: 3,
    title: "Project Manager",
    department: "Operations",
    location: "Manila, Philippines",
    type: "Full-time",
    description: "Lead cross-functional teams to deliver IT projects on time and within budget for our enterprise clients.",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build and maintain CI/CD pipelines, cloud infrastructure, and automation tools for our development teams.",
  },
  {
    id: 5,
    title: "Business Analyst",
    department: "Consulting",
    location: "Manila, Philippines",
    type: "Full-time",
    description: "Work with clients to understand their business needs and translate them into technical requirements.",
  },
  {
    id: 6,
    title: "UI/UX Designer",
    department: "Design",
    location: "Hybrid",
    type: "Full-time",
    description: "Create beautiful and intuitive user experiences for our enterprise software applications.",
  },
]

export default function CareersPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900">
      <ProfessionalNavbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Build your career with a leading IT solutions provider. We're always looking for talented individuals 
              who are passionate about technology and innovation.
            </p>
          </div>

          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-3 p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 border-2 border-yellow-400/50">
                <div className="text-5xl font-bold text-yellow-600 dark:text-yellow-400">10+</div>
                <div className="text-lg text-foreground font-medium">Years of Excellence</div>
              </div>
              <div className="text-center space-y-3 p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 border-2 border-yellow-400/50">
                <div className="text-5xl font-bold text-yellow-600 dark:text-yellow-400">100+</div>
                <div className="text-lg text-foreground font-medium">Team Members</div>
              </div>
              <div className="text-center space-y-3 p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 border-2 border-yellow-400/50">
                <div className="text-5xl font-bold text-yellow-600 dark:text-yellow-400">500+</div>
                <div className="text-lg text-foreground font-medium">Projects Delivered</div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Open Positions</h2>
            <div className="grid grid-cols-1 gap-6">
              {jobOpenings.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-white/80 dark:bg-gray-800/80 border-2 border-yellow-400/30 rounded-2xl p-8 hover:shadow-xl hover:border-yellow-400/60 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="px-3 py-1 bg-yellow-400/20 text-yellow-800 dark:text-yellow-300 rounded-full">{job.department}</span>
                          <span className="px-3 py-1 bg-yellow-400/20 text-yellow-800 dark:text-yellow-300 rounded-full">{job.location}</span>
                          <span className="px-3 py-1 bg-yellow-400/20 text-yellow-800 dark:text-yellow-300 rounded-full">{job.type}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                    </div>
                    <div className="md:ml-6">
                      <Link href="/contact">
                        <Button size="lg" className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">
                          Apply Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-400/20 to-amber-400/20 border-2 border-yellow-400/50 rounded-3xl p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Don't see a position that fits?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're always interested in meeting talented people. Send us your resume and let us know how you can contribute to our team.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">
                Send Your Resume
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
