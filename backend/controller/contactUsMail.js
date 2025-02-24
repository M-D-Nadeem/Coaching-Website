import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();
export const contactUsMail = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, message, course } = req.body;
    if (!name || !email) {
      return res
        .status(400)
        .json({ success: false, error: "Name and email is required" });
    }
    // Create the transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const includeCourseDetails = course.range !== "N/A" && course.fee !== "N/A";

    let ownerMailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: "📩 New Enquiry Received",
      html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; border-radius: 10px;">
            <h2 style="color: #007bff;">📌 New Enquiry Details</h2>
            <hr style="border: 1px solid #ddd;">
            <p><strong>👤 Name:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
            <p><strong>💬 Message:</strong> ${message}</p>
            ${
              includeCourseDetails
                ? `
                  <h3 style="color: #28a745;">🎓 Course Details</h3>
                  <p><strong>📚 Range:</strong> ${course.range}</p>
                  <p><strong>💰 Fee:</strong> ${course.fee}</p>
                `
                : ""
            }
            <hr style="border: 1px solid #ddd;">
            <p style="color: #555;">📅 Received on: ${new Date().toLocaleString()}</p>
                        <p style="color: #555; font-size: 12px;">🔹 This is an automated email. Please do not reply to this message.</p>

            </div>
        `,
    };

    let userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "🌟 Thank You for Contacting Us!",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
            <h2 style="color: #007bff;">👋 Hi ${name},</h2>
            <p style="font-size: 16px;">Thank you for reaching out to us! 🤝</p>
            <p>We have received your message and will get back to you shortly. ⏳</p>
      
            <hr style="border: 1px solid #ddd;">
      
            <p><strong>📩 Your Message:</strong></p>
            <blockquote style="background: #fff; padding: 10px; border-left: 5px solid #007bff;">
              ${message}
            </blockquote>
      
            ${
              includeCourseDetails
                ? `
                  <h3 style="color: #28a745;">🎓 Course Details</h3>
                  <p><strong>📚 Range:</strong> ${course.range}</p>
                  <p><strong>💰 Fee:</strong> ${course.fee}</p>
                `
                : ""
            }
      
            <hr style="border: 1px solid #ddd;">
      
            <p style="font-size: 14px; color: #555;">📅 Sent on: ${new Date().toLocaleString()}</p>
            
            <p>Best Regards,</p>
            <p><strong>🚀 Vikas Gurukulam Team</strong></p>
          </div>
        `,
      };
      
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);

    return res
      .status(200)
      .json({ success: true, message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to send emails" });
  }
};
