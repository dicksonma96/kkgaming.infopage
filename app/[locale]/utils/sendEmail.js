import nodemailer from "nodemailer";

const SMTP_HOST = "smtp.gmail.com";
const SMTP_PORT = 25;
const SMTP_SECURE = true;
const SMTP_USER = "support@kkgaming.com";
const SMTP_PASSWORD = "ubUW6LbUq3fmg5kd";
const SMTP_FROM_EMAIL = "support@kkgaming.com";

const CONTACT_US_RECIPIENT = "enquiry@uuslots.fun;five@uuslots.fun";

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: parseInt(SMTP_PORT || ""),
  secure: SMTP_SECURE == "true",
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD,
  },
});

export async function sendEmail(recipients, subject, body) {
  const successRecipients = [];
  const errors = {};
  for (const recipient of recipients) {
    try {
      await transporter.sendMail({
        from: SMTP_FROM_EMAIL,
        to: recipient,
        subject: subject,
        html: body,
      });
      successRecipients.push(recipient);
    } catch (e) {
      console.log(e);
      errors[recipient] = e;
    }
  }

  return { successRecipients, errors };
}
