"use client"

import { SITE_CONFIG } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export function StaysSectionClient() {
  const { t } = useLanguage()

  const highlights = [
    { titleKey: "poolJacuzzi", descKey: "poolDescription" },
    { titleKey: "twoLevelApartment", descKey: "apartmentDescription" },
    { titleKey: "balconyPorch", descKey: "porchDescription" },
    { titleKey: "sportsTitle", descKey: "sportsDescription" },
    { titleKey: "privacyTitle", descKey: "privacyDescription" },
  ]

  return (
    <section id="stay" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground">
            {t("staysTitle")}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t("staysDescription")}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="bg-secondary/50 border-0 hover:bg-secondary transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-medium text-foreground">{t(highlight.titleKey as any)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(highlight.descKey as any)}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-base font-medium"
          >
            <a href={SITE_CONFIG.vikeyBookingUrl} target="_blank" rel="noopener noreferrer">
              {t("checkAvailability")}
            </a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">{t("staysNote")}</p>
        </div>
      </div>
    </section>
  )
}
