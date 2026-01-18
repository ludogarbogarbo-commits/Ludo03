import Image from "next/image"
import { EstateSectionClient } from "./estate-section-client"

export function EstateSection() {
  return <EstateSectionClient />
  return (
    <section id="estate" className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground">The Estate</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            A sprawling private sanctuary nestled in the heart of the Italian countryside. Over two hectares of
            manicured gardens, Mediterranean cypress trees, and exclusive amenities await you.
          </p>
        </div>

        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="/images/drone-20villa.jpg"
            alt="Aerial view of Villa Maria Pia estate with pool, gardens and Mediterranean architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-light text-primary">2+</p>
            <p className="mt-2 text-sm text-muted-foreground">Hectares</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-light text-primary">100%</p>
            <p className="mt-2 text-sm text-muted-foreground">Green</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-light text-primary">360°</p>
            <p className="mt-2 text-sm text-muted-foreground">Countryside Views</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-light text-primary">1</p>
            <p className="mt-2 text-sm text-muted-foreground">Exclusive Booking</p>
          </div>
        </div>
      </div>
    </section>
  )
}
