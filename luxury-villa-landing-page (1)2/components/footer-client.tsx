"use client"

import { SITE_CONFIG } from "@/lib/constants"
import { useLanguage } from "@/lib/language-context"

export function FooterClient() {
  const { t } = useLanguage()

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE_CONFIG.propertyName}. {t("allRightsReserved")}
          </p>
          <div className="flex items-center gap-6">
            <a href="#policies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t("policies")}
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t("contact")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
