import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, eventDate, guests, message } = await request.json()

    // Validation - name, email, eventDate, guests are required
    if (!name || !email || !eventDate || !guests) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields: name, email, eventDate, guests" },
        { status: 400 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const to = process.env.INQUIRY_TO_EMAIL
    if (!to) {
      return NextResponse.json(
        { ok: false, error: "Server not configured (missing INQUIRY_TO_EMAIL)" },
        { status: 500 }
      )
    }

    const from = process.env.INQUIRY_FROM_EMAIL || "onboarding@resend.dev"

    await resend.emails.send({
      from,
      to,
      subject: `New Event Inquiry — ${name} (${eventDate})`,
      replyTo: email,
      text:
        `New Event Inquiry\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || "-"}\n` +
        `Event Date: ${eventDate}\n` +
        `Number of Guests: ${guests}\n\n` +
        `Message:\n${message || "-"}`,
    })

    return NextResponse.json(
      { ok: true },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing inquiry:", error)
    return NextResponse.json(
      { ok: false, error: "Failed to submit inquiry" },
      { status: 500 }
    )
  }
}
