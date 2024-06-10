const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors({
  origin: ['https://vitadentt.vercel.app/', 'http://localhost:3000'],
}));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  
  auth: {
    user: 'nursultan12369@gmail.com',
    pass: 'hmefzfmiqhmijmvv',
  },
});

app.get('/', (req, res) => {
  res.send("hello hotel")
})

app.post('/send-email', express.json(), (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'nursultan12369@gmail.com',
    to: 'nursultan12369@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).json({ error: 'Error: Email not sent.' });
    } else {
      res.status(200).json({ success: 'Email sent successfully.' });
    }
    
  });
});

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports == app;
