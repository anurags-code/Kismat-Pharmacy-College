import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: "Kismat College <noreply@kismatcollege.com>", // temp sender
      to: [process.env.CONTACT_EMAIL], // dynamic email
      reply_to: email,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <hr/>
        <p>This message was sent from your website contact form.</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Email Error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
