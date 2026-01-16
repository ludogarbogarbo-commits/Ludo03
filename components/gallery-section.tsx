"use client"

import { useState } from "react"
import { SITE_CONFIG } from "@/lib/constants"
import { X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

function getImageSrc(
  image: { caption: string; src?: string; query?: string },
  size: { width: number; height: number },
) {
  if (image.src) {
    return image.src
  }
  return `/placeholder.svg?height=${size.height}&width=${size.width}&query=${encodeURIComponent(image.query || image.caption)}`
}

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const { t } = useLanguage()

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground">
            {t("galleryTitle")}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SITE_CONFIG.galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-square overflow-hidden rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              aria-label={`View ${image.caption}`}
            >
              <img
                src={getImageSrc(image, { width: 400, height: 400 || "/placeholder.svg" })}
                alt={image.caption}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/20" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium text-background">{image.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-background hover:text-background/80 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="relative max-w-4xl max-h-[80vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={getImageSrc(SITE_CONFIG.galleryImages[selectedImage], {
                width: 1200,
                height: 800 || "/placeholder.svg",
              })}
              alt={SITE_CONFIG.galleryImages[selectedImage].caption}
              className="h-full w-full object-contain rounded-lg"
            />
            <p className="mt-4 text-center text-lg font-medium text-background">
              {SITE_CONFIG.galleryImages[selectedImage].caption}
            </p>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {SITE_CONFIG.galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(index)
                }}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === selectedImage ? "bg-background" : "bg-background/40"
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
