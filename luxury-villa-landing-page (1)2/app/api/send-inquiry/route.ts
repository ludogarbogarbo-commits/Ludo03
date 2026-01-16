import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, eventDate, guests, message } = await request.json()

    // Create email body
    const emailBody = `
New Event Inquiry from Villa Maria Pia Website

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Event Date: ${eventDate}
Number of Guests: ${guests}
Message: ${message || "No message provided"}
    `.trim()

    // For now, we'll return a success response
    // In production, you would integrate with an email service like SendGrid, Nodemailer, etc.
    console.log("Inquiry received:", { name, email, phone, eventDate, guests, message })

    // You can uncomment and use one of these services:
    // const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    //   method: "POST",
    //   headers: {
    //     "Authorization": `Bearer ${process.env.SENDGRID_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     personalizations: [
    //       {
    //         to: [{ email: "mariapiaeventi@gmail.com" }],
    //         subject: `New Event Inquiry from ${name}`,
    //       },
    //     ],
    //     from: { email: "noreply@villamariopia.com" },
    //     content: [{ type: "text/plain", value: emailBody }],
    //   }),
    // })

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
