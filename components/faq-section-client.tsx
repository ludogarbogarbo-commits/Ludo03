"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/lib/language-context"

export function FaqSectionClient() {
  const { t } = useLanguage()

  const faqs = [
    {
      questionKey: "checkInQuestion",
      answerKey: "checkInAnswer",
    },
    {
      questionKey: "accessDetailsQuestion",
      answerKey: "accessDetailsAnswer",
    },
    {
      questionKey: "eventInquiryQuestion",
      answerKey: "eventInquiryAnswer",
    },
    {
      questionKey: "cancellationQuestion",
      answerKey: "cancellationAnswer",
    },
    {
      questionKey: "parkingQuestion",
      answerKey: "parkingAnswer",
    },
    {
      questionKey: "rulesQuestion",
      answerKey: "rulesAnswer",
    },
  ]

  return (
    <section id="faq" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground">
            {t("faqTitle")}
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-16">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-light hover:no-underline">
                {t(faq.questionKey as any)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{t(faq.answerKey as any)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
