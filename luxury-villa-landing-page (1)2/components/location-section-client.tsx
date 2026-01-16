"use client"

import { SITE_CONFIG } from "@/lib/constants"
import { MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function LocationSectionClient() {
  const { t } = useLanguage()

  return (
    <section id="location" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground">
              {t("locationTitle")}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t("locationDescription")}</p>
            <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {t("locationNote")}
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-lg bg-muted overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground/50 mx-auto" />
                <p className="mt-4 text-sm text-muted-foreground">{t("mapPlaceholder")}</p>
                <p className="mt-2 text-xs text-muted-foreground/70">{t("exactLocationAfterBooking")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
