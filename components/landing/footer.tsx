import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="glass glow-border rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Ready to land your dream job?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join thousands of job seekers who have improved their resumes with Prepped. Start your free scan today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shimmer-btn bg-primary hover:bg-primary/90 text-lg px-8">
              Start Free Scan
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary text-lg px-8">
              View Pricing
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">Prepped</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © 2026 Prepped. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
