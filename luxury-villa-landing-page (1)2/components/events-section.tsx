"use client"

import { EventsSectionClient } from "./events-section-client"

export function EventsSection() {
  return <EventsSectionClient />
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guests: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Reset form after showing success
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", eventDate: "", guests: "", message: "" })
    }, 100)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="events" className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground">
            {SITE_CONFIG.eventsTitle}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{SITE_CONFIG.eventsDescription}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {SITE_CONFIG.eventsEventTypes.map((type, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium text-foreground/80 bg-background rounded-full border border-border"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          {/* Contact Box */}
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-8 sm:p-10">
              <h3 className="text-2xl font-light">For event inquiries:</h3>

              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70">Call us</p>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-lg font-medium hover:underline">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70">Email us</p>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-lg font-medium hover:underline break-all">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-sm text-primary-foreground/70">{SITE_CONFIG.eventsResponseTime}</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <a href={`tel:${SITE_CONFIG.phone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <a href={`mailto:${SITE_CONFIG.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
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
                  <h3 className="text-2xl font-light text-foreground">Thank you!</h3>
                  <p className="mt-4 text-muted-foreground">{"We'll contact you shortly to discuss your event."}</p>
                  <Button variant="outline" className="mt-8 bg-transparent" onClick={() => setIsSubmitted(false)}>
                    Submit another inquiry
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-light text-foreground">Event Inquiry</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Or contact us directly by phone/email for faster response.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
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
                        <Label htmlFor="email">Email *</Label>
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
                        <Label htmlFor="phone">Phone (optional)</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-secondary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="eventDate">Event Date *</Label>
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
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guests">Number of Guests *</Label>
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

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your event..."
                        className="bg-secondary/50 resize-none"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Send Inquiry
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
