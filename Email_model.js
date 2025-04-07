const express = require("express");
const EmailSchemas = require("../model/Email_model");
const sendEmail = require("../../mail.js");
const EmailData = async (req, res) => {
    try {
        const { to, subject, text, html } = req.body;
        const info = await sendEmail(to, subject, text, html);
         const emailRecord = new EmailSchemas({to, subject, text, html});
         await emailRecord.save();
         res.status(200).json({
            email: emailRecord, 
            info: info,
            message: "Email sent successfully and saved to database!", 
         });
    }
    catch(error) {
        console.log("Error in sending email", err);
    }
};
module.exports = { EmailData };
