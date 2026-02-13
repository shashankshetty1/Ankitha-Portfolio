import { RequestHandler } from "express";

export const handleContact: RequestHandler = (req, res) => {
  const { name, email, message } = req.body;

  console.log("Contact Form Submission Received:");
  console.log(`To: shettyshashank089@gmail.com`);
  console.log(`From: ${name} (${email})`);
  console.log(`Message: ${message}`);

  // In a real application, you would use an email service here.
  // Example with Resend/SendGrid:
  /*
  try {
    await emailService.send({
      to: "shettyshashank089@gmail.com",
      from: "portfolio@example.com",
      subject: `New Message from ${name}`,
      text: message,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Failed to send email" });
  }
  */

  // Simulating reliable delivery
  res.status(200).json({ 
    success: true, 
    message: "Thank you! Your message has been sent successfully to the administrator." 
  });
};
