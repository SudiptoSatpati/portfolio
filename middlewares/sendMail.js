import { createTransport } from "nodemailer";
import dotenv from "dotenv";
dotenv.config({ path: "./backend/config/config.env" });

export const sendMail = async (text) => {
  try {
    const transporter = createTransport({
      host: process.env.SMPT_HOST,
      port: process.env.SMPT_PORT,
      auth: {
        user: process.env.SMPT_USER,
        pass: process.env.SMPT_PASSWORD,
      },
    });

    await transporter.sendMail({
      subject: "CONTACT REQUEST FROM PORTFOLIO",
      to: process.env.MY_MAIL,
      from: process.env.MY_MAIL,
      text,
    });
  } catch (error) {
    console.error("Error sending mail:", error);
    throw new Error("Failed to send email");
  }
};
