import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"
import { SITE_CONFIG } from "@/lib/constants"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, eventDate, guests, message } = await request.json()

    // Validation
    if (!name || !email || !eventDate || !guests) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: "Server not configured (missing RESEND_API_KEY)" },
        { status: 500 }
      )
    }
    const resend = new Resend(process.env.RESEND_API_KEY)

    const to = process.env.INQUIRY_TO_EMAIL || SITE_CONFIG.email
    const from = process.env.INQUIRY_FROM_EMAIL || "onboarding@resend.dev"

    const result = await resend.emails.send({
      from,
      to,
      subject: `New Event Inquiry — ${name} (${eventDate})`,
      reply_to: email,
      text:
        `New Event Inquiry\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || "-"}\n` +
        `Event Date: ${eventDate}\n` +
        `Number of Guests: ${guests}\n\n` +
        `Message:\n${message || "-"}`,
    })

    if (result?.error) {
      console.error("Resend error:", result.error)
      return NextResponse.json(
        { success: false, error: result.error.message || "Email service error" },
        { status: 502 }
      )
    }

    return NextResponse.json(
      { success: true, message: "Inquiry submitted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing inquiry:", error)
    return NextResponse.json(
      { success: false, error: "Failed to submit inquiry" },
      { status: 500 }
    )
  }
}
