const nodemailer = require('nodemailer');

async function send(to, subject, content){
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "lam81896@gmail.com",
          pass: "kimmaimai123456",
        }
      });
      return transporter.sendMail({
        from: "lam81896@gmail.com",
        to,
        subject,
        text: content,
      })
}
module.exports={send};