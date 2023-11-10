import "dotenv/config";
import nodeMailer from "nodemailer";

export const sendEmail = async (options) => {
  let testAccount = await nodeMailer.createTestAccount();

  const transporter = await nodeMailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user, // email của bạn
      pass: testAccount.pass, // password email của bạn
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  console.log(testAccount.user);

  const mailOptions = {
    from: "nhat250701@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.message,
  };

  const info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
};
