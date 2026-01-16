import { SITE_CONFIG } from "@/lib/constants"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { ReviewsSectionClient } from "./reviews-section-client"

export function ReviewsSection() {
  return <ReviewsSectionClient />
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground">
            {SITE_CONFIG.reviewsTitle}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{SITE_CONFIG.reviewsSubtitle}</p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.reviews.map((review, index) => (
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
                <p className="text-muted-foreground text-sm leading-relaxed">{`"${review.text}"`}</p>
                <p className="mt-4 text-sm font-medium text-foreground">— {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
