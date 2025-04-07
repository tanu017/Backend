const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: process.env.HOST, 
    port: 587,
    secure: false, 
    auth: {
        user: process.env.MAIL_ID, 
        pass: process.env.MAIL_PASS, 
    },
});
const sendEmail = async (to, subject, text, html) => {
    const mailOptions = {
        from: process.env.MAILD_ID, 
        to: to, 
        subject: subject, 
        text: text, 
        html: html,
    };
    try {
        await transporter.sendEmail(mailOptions);
        console.log("Email sent successfully");
    } 
    catch(err) {
        console.log("Error in sending Email", err);
    }
};
module.exports = sendEmail;
