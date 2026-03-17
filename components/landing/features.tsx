import { Briefcase, Target, Wand2 } from "lucide-react"

const features = [
  {
    icon: Briefcase,
    title: "Real-time Job Matching",
    description:
      "Our AI scans thousands of job postings to match your resume with the perfect opportunities. Get instant compatibility scores for any role.",
    gradient: "from-primary to-primary/50",
  },
  {
    icon: Target,
    title: "Keyword Gap Analysis",
    description:
      "Identify missing skills and keywords that recruiters look for. Our AI compares your resume against job requirements to maximize your match rate.",
    gradient: "from-accent to-accent/50",
  },
  {
    icon: Wand2,
    title: "Bullet Point Optimizer",
    description:
      "Transform weak bullet points into powerful, action-oriented statements. Our AI rewrites your experience to highlight achievements and impact.",
    gradient: "from-[#10b981] to-[#10b981]/50",
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Powered by Advanced AI
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Our intelligent resume analysis engine uses cutting-edge AI to help you stand out from the competition.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative glass rounded-2xl p-8 transition-all duration-300 hover:glow-border"
            >
              {/* Icon */}
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient}`}
              >
                <feature.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
