import nodemailer from 'nodemailer';
//import {capitalizeFirstLetter} from '../utils/helpers.js';

type ContactProps = {
  email: string;
  name: string;
  message: string;
};

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const emailSender = async (user: ContactProps) => {
  try {
    const mailOptions = {
      to: 'destinyifehor@gmail.com',
      from: `${user.email} <noreply.${process.env.GMAIL_EMAIL}>`,
      subject: 'Message from Your Space',
      text: user.message,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log('email sent', info.response);
  } catch (err) {
    console.log('Error sending email', err);
    throw err;
  }
};
