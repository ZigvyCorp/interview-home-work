const expressAsyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "cskh.azgear@gmail.com", // generated ethereal user
    pass: "tvyipsqejgiqltzv", // generated ethereal password
  },
  envelope: {
    from: "cskh.azgear@gmail.com",
    replyTo: "cskh.azgear@gmail.com",
  },
});

const sendMail = async ({ subject, to, body }) => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  try {
    transporter.sendMail(
      {
        from: "cskh.azgear@gmail.com",
        to: to,
        subject: subject,
        html: body,
      },
      (err, info) => {
        if (err) {
          console.log("error transporter.sendMail: ", err);
        } else {
          console.log("info.response transporter.sendMail: ", info.response);
        }
      }
    );
    console.log(
      `Gửi mail thành công ${hours}:${minutes} ngày ${day}/${month}/${year}`
    );
  } catch (error) {
    console.log(
      `Error sendMail ${hours}:${minutes} ngày ${day}/${month}/${year}: `,
      error
    );
    throw new Error(error.message);
  }
};

module.exports = sendMail;
