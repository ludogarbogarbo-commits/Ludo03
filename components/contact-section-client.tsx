"use client"

import { SITE_CONFIG } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSectionClient() {
  const { t } = useLanguage()

  const whatsappUrl = "https://wa.me/message/3RF3TQBBO7LMB1"

  return (
    <section id="contact" className="py-24 sm:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">{t("getInTouch")}</h2>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
          <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Phone className="h-5 w-5" />
            <span className="text-lg">{SITE_CONFIG.phone}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <MessageCircle className="h-5 w-5 text-[#25D366]" />
            <span className="text-lg font-medium text-[#25D366]">WhatsApp</span>
          </a>

          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Mail className="h-5 w-5" />
            <span className="text-lg">{SITE_CONFIG.email}</span>
          </a>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-base font-medium"
          >
            <a href={SITE_CONFIG.vikeyBookingUrl} target="_blank" rel="noopener noreferrer">
              {t("bookYourStay")}
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base font-medium bg-transparent"
          >
            <a href="#events">{t("planAnEvent")}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
