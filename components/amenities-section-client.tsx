"use client"

import { SITE_CONFIG } from "@/lib/constants"
import { Home, Trees } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AmenitiesSectionClient() {
  const { t } = useLanguage()

  return (
    <section id="amenities" className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground">
            {t("amenitiesTitle")}
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Inside */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Home className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="text-2xl font-light text-foreground">{t("inside")}</h3>
            </div>
            <ul className="space-y-4">
              {SITE_CONFIG.amenitiesInside.map((amenity, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {t(amenity as any)}
                </li>
              ))}
            </ul>
          </div>

          {/* Outside */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Trees className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="text-2xl font-light text-foreground">{t("outside")}</h3>
            </div>
            <ul className="space-y-4">
              {SITE_CONFIG.amenitiesOutside.map((amenity, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {t(amenity as any)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
