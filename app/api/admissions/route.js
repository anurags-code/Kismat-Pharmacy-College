import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const {
      applicantName,
      email,
      phone,
      course,
      academicScore,
      address,
    } = await req.json();

    // 1. Send email to ADMIN
    const adminEmail = await resend.emails.send({
      from: "Kismat Pharmacy College <noreply@kismatcollege.com>",
      to: [process.env.CONTACT_EMAIL],
      reply_to: email,
      subject: `New Admission Application: ${applicantName}`,
      html: `
        <h2>New Admission Application</h2>
        <p><strong>Name:</strong> ${applicantName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Academic Score:</strong> ${academicScore}</p>
        <p><strong>Address:</strong> ${address || "Not provided"}</p>
        <hr/>
        <p>This application was submitted from the website.</p>
      `,
      text: `
New Admission Application

Name: ${applicantName}
Email: ${email}
Phone: ${phone}
Course: ${course}
Academic Score: ${academicScore}
Address: ${address || "Not provided"}
      `,
    });

    // 2. Send confirmation email to STUDENT
    const studentEmail = await resend.emails.send({
      from: "Kismat Pharmacy College <noreply@kismatcollege.com>",
      to: [email],
      subject: "Application Received - Kismat Pharmacy College",
      html: `
        <h2>🎉 Application Received Successfully!</h2>
        <p>Dear <strong>${applicantName}</strong>,</p>
        <p>Thank you for applying to <strong>Kismat Pharmacy College</strong>.</p>
        <p>Your application for <strong>${course}</strong> has been received successfully.</p>
        <p>Our admissions team will review your application and contact you soon via email or phone.</p>
        <br/>
        <p>Best regards,<br/>
        <strong>Kismat Pharmacy College</strong><br/>
        <small>${phone}</small>
        </p>
      `,
      text: `
Application Received - Kismat Pharmacy College

Dear ${applicantName},

Thank you for applying to Kismat Pharmacy College.
Your application for ${course} has been received successfully.

Our admissions team will review your application and contact you soon.

Best regards,
Kismat Pharmacy College
      `,
    });

    return Response.json({ 
      success: true, 
      message: "Application submitted successfully! Confirmation email sent.",
      adminEmail: adminEmail.id,
      studentEmail: studentEmail.id 
    });

  } catch (error) {
    console.error("Admission Email Error:", error);
    return Response.json(
      { 
        success: false, 
        message: "Failed to send application. Please try again." 
      }, 
      { status: 500 }
    );
  }
}