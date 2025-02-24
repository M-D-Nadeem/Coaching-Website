import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()
export const sendMail=async (req,res)=>{
    const { name, course, mobile, email } = req.body;

    if (!name || !course || !mobile || !email) {
      return res.status(400).json({success:false, error: "All fields are required" });
    }
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER, 
          pass: process.env.EMAIL_PASS, 
        },
      });

  try {
    const adminMailOptions = {
        from: process.env.EMAIL_USER,
        replyTo: email,
        to: process.env.EMAIL_USER, 
        subject: "📩 New Enquiry Received - Vikas Gurukulam",
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h2 style="color: #007bff;">📢 New Enquiry Alert!</h2>
            <p>Dear Admin,</p>
            <p>You have received a new enquiry from a prospective student. Please find the details below:</p>
      
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>👤 Name:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>📚 Course:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${course}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>📞 Mobile:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${mobile}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>✉️ Email:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
              </tr>
            </table>
      
            <p style="margin-top: 20px;"><strong>📌 Action Required:</strong></p>
            <p>✅ Please reach out to the user as soon as possible to provide further assistance.</p>
      
            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ddd;" />
      
            <p style="color: #777; font-size: 12px;">📅 Enquiry received on: ${new Date().toLocaleString()}</p>
            <p style="color: #777; font-size: 12px;">🔹 This is an automated email. Please do not reply to this message.</p>
          </div>
        `,
      };
      

    await transporter.sendMail(adminMailOptions);

    const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "📩 Enquiry Received - Vikas Gurukulam",
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h2 style="color: #007bff;">🎉 Thank You for Your Enquiry, ${name}! 🎉</h2>
            <p>We appreciate your interest in the <strong>📚 ${course}</strong> course at <strong>Vikas Gurukulam</strong>.</p>
      
            <p>📌 Our team has received your request and will get back to you shortly.</p>
      
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>📞 Contact Number:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${mobile}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>✉️ Email:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
              </tr>
            </table>
      
            <p style="margin-top: 20px;">🔎 <strong>What’s Next?</strong></p>
            <ul>
              <li>✅ Our team will reach out to you soon.</li>
              <li>📅 If you have any urgent queries, feel free to contact us at vikasgurukulam0702@gmail.com .</li>
              <li>📢 Stay tuned for updates and course details.</li>
            </ul>
      
            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ddd;" />
      
            <p style="font-size: 14px;">📅 Enquiry received on: ${new Date().toLocaleString()}</p>
      
            <p style="margin-top: 20px;">Best regards,</p>
            <p style="font-weight: bold; color: #007bff;">Vikas Gurukulam Team</p>
            <p>🌐 <a href="https://www.vikasgurukulam.com" target="_blank" style="color: #007bff;">www.vikasgurukulam.com</a></p>
          </div>
        `,
      };
      

    await transporter.sendMail(userMailOptions);

    res.json({success:true, message: "Emails sent successfully" });

  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({success:true, error: "Failed to send emails" });
  }
}