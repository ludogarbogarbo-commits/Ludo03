import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { EstateSection } from "@/components/estate-section"
import { StaysSection } from "@/components/stays-section"
import { EventsSection } from "@/components/events-section"
import { GallerySection } from "@/components/gallery-section"
import { AmenitiesSection } from "@/components/amenities-section"
import { LocationSection } from "@/components/location-section"
import { ReviewsSection } from "@/components/reviews-section"
import { FaqSection } from "@/components/faq-section"
import { PoliciesSection } from "@/components/policies-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <EstateSection />
      <StaysSection />
      <EventsSection />
      <GallerySection />
      <AmenitiesSection />
      <LocationSection />
      <ReviewsSection />
      <FaqSection />
      <PoliciesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
