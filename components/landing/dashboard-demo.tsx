"use client"

import { Button } from "@/components/ui/button"
import {
  FileText,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Wand2,
  ChevronRight,
} from "lucide-react"

const resumeContent = [
  {
    type: "header",
    content: "John Smith",
    subContent: "Senior Software Engineer",
  },
  {
    type: "section",
    title: "Experience",
    items: [
      {
        company: "TechCorp Inc.",
        role: "Software Engineer",
        period: "2021 - Present",
        bullets: [
          { text: "Developed web applications using React", hasIssue: true },
          { text: "Led a team of 5 engineers to deliver features", hasIssue: false },
          { text: "Worked on backend systems", hasIssue: true },
        ],
      },
    ],
  },
  {
    type: "section",
    title: "Skills",
    skills: ["JavaScript", "React", "Node.js", "Python", "AWS"],
  },
]

const suggestions = [
  {
    type: "improvement",
    original: "Developed web applications using React",
    suggestion:
      "Built and deployed 15+ production React applications serving 50K+ daily active users, reducing page load time by 40%",
    impact: "High Impact",
  },
  {
    type: "improvement",
    original: "Worked on backend systems",
    suggestion:
      "Architected scalable microservices using Node.js and AWS Lambda, handling 1M+ daily API requests with 99.9% uptime",
    impact: "High Impact",
  },
  {
    type: "keyword",
    missing: ["TypeScript", "CI/CD", "Agile", "Docker"],
    title: "Missing Keywords",
  },
]

export function DashboardDemo() {
  return (
    <section id="demo" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Product Demo</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            See Prepped in Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Watch how our AI analyzes your resume and provides actionable suggestions in real-time.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="glass glow-border rounded-2xl overflow-hidden">
          {/* Dashboard Header */}
          <div className="border-b border-border px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">Prepped Dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ef4444]" />
              <div className="h-3 w-3 rounded-full bg-[#f59e0b]" />
              <div className="h-3 w-3 rounded-full bg-[#10b981]" />
            </div>
          </div>

          {/* Split View */}
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {/* Left: Resume View */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Your Resume</h3>
              </div>

              <div className="space-y-6">
                {/* Resume Header */}
                <div className="border-b border-border pb-4">
                  <h4 className="text-xl font-bold text-foreground">John Smith</h4>
                  <p className="text-muted-foreground">Senior Software Engineer</p>
                </div>

                {/* Experience Section */}
                <div>
                  <h5 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Experience
                  </h5>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">TechCorp Inc.</span>
                        <span className="text-sm text-muted-foreground">2021 - Present</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Software Engineer</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm">
                          <AlertTriangle className="h-4 w-4 text-[#f59e0b] mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            <span className="bg-[#f59e0b]/20 text-[#f59e0b] px-1 rounded">
                              Developed web applications using React
                            </span>
                          </span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Led a team of 5 engineers to deliver features
                          </span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <AlertTriangle className="h-4 w-4 text-[#f59e0b] mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            <span className="bg-[#f59e0b]/20 text-[#f59e0b] px-1 rounded">
                              Worked on backend systems
                            </span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Skills Section */}
                <div>
                  <h5 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Skills
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "React", "Node.js", "Python", "AWS"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: AI Suggestions */}
            <div className="p-6 bg-secondary/20">
              <div className="flex items-center gap-2 mb-4">
                <Wand2 className="h-5 w-5 text-accent" />
                <h3 className="font-semibold text-foreground">AI Suggestions</h3>
              </div>

              <div className="space-y-4">
                {/* Improvement Suggestion 1 */}
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-[#f59e0b] bg-[#f59e0b]/20 px-2 py-0.5 rounded">
                      High Impact
                    </span>
                    <Button size="sm" className="h-7 shimmer-btn bg-primary hover:bg-primary/90 text-xs">
                      <Wand2 className="h-3 w-3 mr-1" />
                      Auto-fix
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2 line-through">
                    {"Developed web applications using React"}
                  </p>
                  <p className="text-sm text-foreground flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                    Built and deployed 15+ production React applications serving 50K+ daily active users, reducing page load time by 40%
                  </p>
                </div>

                {/* Improvement Suggestion 2 */}
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-[#f59e0b] bg-[#f59e0b]/20 px-2 py-0.5 rounded">
                      High Impact
                    </span>
                    <Button size="sm" className="h-7 shimmer-btn bg-primary hover:bg-primary/90 text-xs">
                      <Wand2 className="h-3 w-3 mr-1" />
                      Auto-fix
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2 line-through">
                    {"Worked on backend systems"}
                  </p>
                  <p className="text-sm text-foreground flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                    Architected scalable microservices using Node.js and AWS Lambda, handling 1M+ daily API requests
                  </p>
                </div>

                {/* Missing Keywords */}
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="h-4 w-4 text-[#f59e0b]" />
                    <span className="text-sm font-medium text-foreground">Missing Keywords</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["TypeScript", "CI/CD", "Agile", "Docker"].map((keyword) => (
                      <span
                        key={keyword}
                        className="px-3 py-1 rounded-full border border-dashed border-[#f59e0b]/50 bg-[#f59e0b]/10 text-sm text-[#f59e0b]"
                      >
                        + {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply All Button */}
                <Button className="w-full shimmer-btn bg-primary hover:bg-primary/90">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Apply All Suggestions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
