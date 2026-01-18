"use client"

import { SITE_CONFIG } from "@/lib/constants"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ReviewsSectionClient() {
  const { t } = useLanguage()

  const reviews = [
    {
      nameKey: "reviewMarcoName",
      textKey: "reviewMarcoText",
      rating: 5,
    },
    {
      nameKey: "reviewSophieName",
      textKey: "reviewSophieText",
      rating: 5,
    },
    {
      nameKey: "reviewFilippoName",
      textKey: "reviewFilippoText",
      rating: 5,
    },
    {
      nameKey: "reviewCatherineName",
      textKey: "reviewCatherineText",
      rating: 5,
    },
  ]

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground">
            {t("reviewsTitle")}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{t("reviewsSubtitle")}</p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-background border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{`"${t(review.textKey as any)}"`}</p>
                <p className="mt-4 text-sm font-medium text-foreground">— {t(review.nameKey as any)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
