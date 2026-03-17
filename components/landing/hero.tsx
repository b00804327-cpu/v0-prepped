"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, CheckCircle2, AlertCircle, Sparkles } from "lucide-react"

export function Hero() {
  const score = 82
  const circumference = 2 * Math.PI * 45
  const offset = circumference - (score / 100) * circumference

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left side - Copy */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Resume Analysis</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Perfect your CV for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                every role
              </span>
              , instantly
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Our AI analyzes your resume against job descriptions, identifies keyword gaps, and optimizes your bullet points to help you land more interviews.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="shimmer-btn bg-primary hover:bg-primary/90 text-lg px-8">
                Start Free Scan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary text-lg px-8">
                See How It Works
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#10b981]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#10b981]" />
                <span>5 free scans/month</span>
              </div>
            </div>
          </div>

          {/* Right side - AI Analysis Card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="glass glow-border rounded-2xl p-6 w-full max-w-md">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">AI Analysis</h3>
                    <p className="text-sm text-muted-foreground">Resume Score</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-[#10b981]/20 px-3 py-1">
                  <span className="text-sm font-medium text-[#10b981]">Analyzing...</span>
                </div>
              </div>

              {/* Circular Progress Score */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="45"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-secondary"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="45"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      className="progress-ring"
                      style={{
                        strokeDasharray: circumference,
                        ["--progress-offset" as string]: offset,
                      }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-foreground">{score}</span>
                    <span className="text-sm text-muted-foreground">/100</span>
                  </div>
                </div>
              </div>

              {/* Analysis Items */}
              <div className="space-y-3">
                <AnalysisItem
                  status="success"
                  label="Keyword Match"
                  value="85%"
                />
                <AnalysisItem
                  status="warning"
                  label="Skills Gap"
                  value="3 missing"
                />
                <AnalysisItem
                  status="success"
                  label="ATS Compatibility"
                  value="Excellent"
                />
                <AnalysisItem
                  status="warning"
                  label="Bullet Points"
                  value="4 to improve"
                />
              </div>

              {/* CTA */}
              <Button className="w-full mt-6 shimmer-btn bg-primary hover:bg-primary/90">
                View Full Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Floating elements for depth */}
            <div className="absolute -top-4 -right-4 glass rounded-xl p-3 pulse-glow hidden lg:block">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#10b981]" />
                <span className="text-sm font-medium text-foreground">ATS Optimized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AnalysisItem({
  status,
  label,
  value,
}: {
  status: "success" | "warning"
  label: string
  value: string
}) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-secondary/50 px-4 py-3">
      <div className="flex items-center gap-3">
        {status === "success" ? (
          <CheckCircle2 className="h-4 w-4 text-[#10b981]" />
        ) : (
          <AlertCircle className="h-4 w-4 text-[#f59e0b]" />
        )}
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <span className={`text-sm font-medium ${status === "success" ? "text-[#10b981]" : "text-[#f59e0b]"}`}>
        {value}
      </span>
    </div>
  )
}
