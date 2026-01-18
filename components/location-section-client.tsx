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
          </div>

          <a
            href="https://maps.app.goo.gl/T3TMC3XimM6T9saq6?g_st=it"
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-[4/3] rounded-lg overflow-hidden block hover:opacity-90 transition-opacity"
          >
            <img
              src="/map-location.png"
              alt="Villa Maria Pia Location"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="text-center text-white">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p className="text-lg font-semibold">{t("openOnGoogleMaps")}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
