const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  //! 1) Create a transporter

  console.log('process.env.EMAIL_HOST: ', process.env.EMAIL_HOST);
  console.log('process.env.EMAIL_PORT: ', process.env.EMAIL_PORT);
  console.log('process.env.EMAIL_USERNAME: ', process.env.EMAIL_USERNAME);
  console.log('process.env.EMAIL_PASSWORD: ', process.env.EMAIL_PASSWORD);
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,

    port: process.env.EMAIL_PORT,

    auth: {
      user: process.env.EMAIL_USERNAME,

      pass: process.env.EMAIL_PASSWORD,
    },
  });

  //! 2) Define the email options
  const mailOptions = {
    from: 'Luong Viet Tri <luongviettri@gmail.com>',
    to: options.email,
    subject: options.submit,
    text: options.message,

    //html
  };

  //! 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
