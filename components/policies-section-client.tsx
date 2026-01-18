"use client"

import { SITE_CONFIG } from "@/lib/constants"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function PoliciesSectionClient() {
  const { t } = useLanguage()

  const policiesKeys = [
    "noSmokingInside",
    "noUnauthorizedParties",
    "quietHours",
    "maxOccupancy",
    "guestResponsibility",
    "accessAfterBooking",
  ]

  return (
    <section id="policies" className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground">
            {t("policiesTitle")}
          </h2>
        </div>

        <ul className="mt-16 space-y-4">
          {policiesKeys.map((policyKey, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t(policyKey as any) }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
