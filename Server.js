const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const allowedOrigins = ['http://localhost:3001'];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Головна сторінка вашого додатку');
});

app.post('/send-email', (req, res) => {
  const data = req.body;
  // Логіка відправки листа тут
  // Відповідь на запит
  res.status(200).send('Email sent successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const nodemailer = require('nodemailer');

// Конфігуруйте параметри поштового сервера
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com', // Ваша електронна пошта
    pass: 'your-password', // Пароль для електронної пошти
  },
});

// Обробка POST-запиту для відправки листа
app.post('/send-email', (req, res) => {
  const data = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com', // Ваша електронна пошта
    to: 'recipient-email@example.com', // Електронна пошта отримувача
    subject: 'Запит на контакт', // Тема листа
    text: `Ім'я: ${data.name}\nEmail: ${data.email}\nПовідомлення: ${data.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Помилка відправки листа:', error);
      res.status(500).send('Помилка відправки листа');
    } else {
      console.log('Лист надіслано:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});