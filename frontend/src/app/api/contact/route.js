import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: "aritrakundu.in@gmail.com",
      subject: `Truth Archive Contact - ${name}`,
      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2>New Contact Message</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <div style="margin-top:20px;">
            <strong>Message:</strong>
            <p>${message}</p>
          </div>
        </div>
      `,
    });

    return Response.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}