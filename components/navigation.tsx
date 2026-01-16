"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="text-xl font-semibold tracking-wide text-foreground">
            {SITE_CONFIG.propertyName}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            {SITE_CONFIG.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={SITE_CONFIG.vikeyBookingUrl} target="_blank" rel="noopener noreferrer">
                {t("bookYourStay")}
              </a>
            </Button>
            <Button asChild className="bg-stone-800 text-white hover:bg-stone-700">
              <a href="#events">{t("planAnEvent")}</a>
            </Button>
            
            {/* Language Buttons */}
            <div className="flex gap-2 ml-4">
              <Button
                onClick={() => setLanguage("en")}
                variant={language === "en" ? "default" : "outline"}
                className="w-10 h-10 p-0"
              >
                EN
              </Button>
              <Button
                onClick={() => setLanguage("it")}
                variant={language === "it" ? "default" : "outline"}
                className="w-10 h-10 p-0"
              >
                IT
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border">
            <div className="flex flex-col gap-4 p-6">
              {SITE_CONFIG.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="mt-4 bg-primary text-primary-foreground">
                <a href={SITE_CONFIG.vikeyBookingUrl} target="_blank" rel="noopener noreferrer">
                  {t("bookYourStay")}
                </a>
              </Button>
              <Button asChild className="bg-stone-800 text-white hover:bg-stone-700">
                <a href="#events" onClick={() => setIsMobileMenuOpen(false)}>
                  {t("planAnEvent")}
                </a>
              </Button>
              
              {/* Mobile Language Buttons */}
              <div className="flex gap-2 mt-4">
                <Button
                  onClick={() => setLanguage("en")}
                  variant={language === "en" ? "default" : "outline"}
                  className="flex-1"
                >
                  EN
                </Button>
                <Button
                  onClick={() => setLanguage("it")}
                  variant={language === "it" ? "default" : "outline"}
                  className="flex-1"
                >
                  IT
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
