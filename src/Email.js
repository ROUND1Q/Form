// sendEmail.js

const nodemailer = require("nodemailer");

// Налаштування поштового сервера
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "anreii1992@gmail.com",
    pass: "1813249494vs",
  },
});

// Функція для відправки листа
const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: "anreii1992@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: " + error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = sendEmail;
