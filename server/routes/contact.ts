import { RequestHandler } from "express";
import nodemailer from "nodemailer";

export const handleContact: RequestHandler = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

  await transporter.sendMail({
  from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
to: [
  "shettyshashank089@gmail.com",
  "ankitharadhakrishna9@gmail.com"
],
  replyTo: email, // 👈 VERY IMPORTANT
  subject: `New Message from ${name}`,
  text: `
Name: ${name}
Email: ${email}
Message: ${message}
  `,
});


    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email.",
    });
  }
};
