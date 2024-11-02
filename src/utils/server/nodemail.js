import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, 
  auth: {
    user: process.env.BREVO_EMAIL, // Company/Team email address
    pass: process.env.BREVO_EMAIL_PASSWORD, // App password for company email
  },
});


export const mailOptions = {
  from: {
    name: process.env.COMPANY_NAME,
    address: process.env.TEAM_NOTIFICATION_EMAIL
  }
};