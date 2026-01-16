import { SITE_CONFIG } from "@/lib/constants"
import { CheckCircle } from "lucide-react"
import { PoliciesSectionClient } from "./policies-section-client"

export function PoliciesSection() {
  return <PoliciesSectionClient />
  return (
    <section id="policies" className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground">
            {SITE_CONFIG.policiesTitle}
          </h2>
        </div>

        <ul className="mt-16 space-y-4">
          {SITE_CONFIG.policies.map((policy, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{policy}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
