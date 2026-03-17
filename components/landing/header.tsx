"use client"

import { useState } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Prepped</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#demo"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Demo
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Login
          </Button>
          <Button className="shimmer-btn bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-border">
          <div className="space-y-1 px-6 py-4">
            <a
              href="#features"
              className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#demo"
              className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground"
            >
              Demo
            </a>
            <a
              href="#pricing"
              className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground"
            >
              Pricing
            </a>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" className="w-full justify-center text-muted-foreground">
                Login
              </Button>
              <Button className="shimmer-btn w-full bg-primary">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
