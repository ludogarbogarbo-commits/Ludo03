"use client"

import type React from "react"

import { useState } from "react"
import { SITE_CONFIG } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MessageCircle, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function EventsSectionClient() {
  const { t } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+39",
    phone: "",
    eventDate: "",
    guests: "",
    message: "",
  })

  const countryCodes = [
    { code: "+1", country: "USA/Canada" },
    { code: "+39", country: "Italy" },
    { code: "+44", country: "United Kingdom" },
    { code: "+33", country: "France" },
    { code: "+49", country: "Germany" },
    { code: "+34", country: "Spain" },
    { code: "+31", country: "Netherlands" },
    { code: "+46", country: "Sweden" },
    { code: "+41", country: "Switzerland" },
    { code: "+43", country: "Austria" },
    { code: "+45", country: "Denmark" },
    { code: "+47", country: "Norway" },
    { code: "+48", country: "Poland" },
    { code: "+32", country: "Belgium" },
    { code: "+30", country: "Greece" },
    { code: "+351", country: "Portugal" },
    { code: "+358", country: "Finland" },
    { code: "+60", country: "Malaysia" },
    { code: "+65", country: "Singapore" },
    { code: "+852", country: "Hong Kong" },
    { code: "+81", country: "Japan" },
    { code: "+61", country: "Australia" },
    { code: "+64", country: "New Zealand" },
    { code: "+55", country: "Brazil" },
    { code: "+54", country: "Argentina" },
    { code: "+56", country: "Chile" },
    { code: "+57", country: "Colombia" },
    { code: "+58", country: "Venezuela" },
    { code: "+98", country: "Iran" },
    { code: "+966", country: "Saudi Arabia" },
    { code: "+971", country: "United Arab Emirates" },
  ]

  const whatsappUrl = "https://wa.me/message/3RF3TQBBO7LMB1"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)
    
    // Validate phone is required
    if (!formData.phone.trim()) {
      setError(t("phone") + " is required")
      setIsLoading(false)
      return
    }
    
    try {
      const fullPhone = formData.countryCode + formData.phone.replace(/\s+/g, "")
      const submitData = { ...formData, phone: fullPhone }
      
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      })

      const data = await response.json()

      if (response.ok && data.ok) {
        setIsSubmitted(true)
        // Reset form after showing success
        setTimeout(() => {
          setFormData({ name: "", email: "", countryCode: "+39", phone: "", eventDate: "", guests: "", message: "" })
          setIsSubmitted(false)
        }, 3000)
      } else {
        setError(data.error || "Failed to submit inquiry. Please try again.")
      }
    } catch (err) {
      console.error("Error submitting form:", err)
      setError("An error occurred. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const eventTypes = [
    t("eventTypeWeddings"),
    t("eventTypePrivateCelebrations"),
    t("eventTypeCorporateRetreats"),
    t("eventTypeDaytimeGatherings"),
  ]

  return (
    <section id="events" className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground">
            {t("eventsTitle")}
          </h2>
          
          {/* Events Hero Image */}
          <div className="mt-6 mb-8 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/events-hero.jpg" 
              alt="Events at Villa Maria Pia"
              className="w-full h-80 object-cover"
            />
          </div>
          
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{t("eventsDescription")}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {eventTypes.map((type, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium text-foreground/80 bg-background rounded-full border border-border"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-12">
          {/* Contact Box */}
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-8 sm:p-10">
              <h3 className="text-2xl font-light">{t("forEventInquiries")}</h3>

              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70">{t("callUs")}</p>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-lg font-medium hover:underline">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/20">
                    <MessageCircle className="h-5 w-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70">{t("contactViaWhatsApp")}</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:underline text-[#25D366]">
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70">{t("emailUs")}</p>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-lg font-medium hover:underline break-all">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-sm text-primary-foreground/70">{t("eventResponseTime")}</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <a href={`tel:${SITE_CONFIG.phone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    {t("callNow")}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#25D366] bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {t("messageViaWhatsApp")}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <a href={`mailto:${SITE_CONFIG.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    {t("sendEmail")}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Inquiry Form */}
          <Card className="bg-background border border-border">
            <CardContent className="p-8 sm:p-10">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                  <CheckCircle className="h-16 w-16 text-accent mb-6" />
                  <h3 className="text-2xl font-light text-foreground">{t("thankYou")}</h3>
                  <p className="mt-4 text-muted-foreground">{t("thankYouMessage")}</p>
                  <Button variant="outline" className="mt-8 bg-transparent" onClick={() => setIsSubmitted(false)}>
                    {t("submitAnotherInquiry")}
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-light text-foreground">{t("eventInquiry")}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t("inquiryFormDescription")}
                  </p>

                  {error && (
                    <div className="mt-4 p-3 bg-destructive/10 border border-destructive/30 rounded-md">
                      <p className="text-sm text-destructive">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("name")} *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-secondary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("email")} *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-secondary/50"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="countryCode">{t("phoneCountryCode")} *</Label>
                        <select
                          id="countryCode"
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                          required
                          className="w-full px-3 py-2 bg-secondary/50 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          {countryCodes.map((item) => (
                            <option key={item.code} value={item.code}>
                              {item.code} {item.country}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t("phoneNumber")} *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="1234567890"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="bg-secondary/50"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="eventDate">{t("eventDate")} *</Label>
                        <Input
                          id="eventDate"
                          name="eventDate"
                          type="date"
                          value={formData.eventDate}
                          onChange={handleChange}
                          required
                          className="bg-secondary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guests">{t("numberOfGuests")} *</Label>
                        <Input
                          id="guests"
                          name="guests"
                          type="number"
                          value={formData.guests}
                          onChange={handleChange}
                          required
                          className="bg-secondary/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t("message")}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder={t("message")}
                        className="bg-secondary/50 resize-none"
                      />
                    </div>

                    <Button type="submit" disabled={isLoading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed">
                      {isLoading ? "Sending..." : t("submitInquiry")}
                    </Button>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
