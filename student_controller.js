const express = require("express");
const StudentSchemes = require("../model/student_model");
const StudentData = async (req, res) => {
    try {
        const {name, phone, email, message } = req.body;
        const student = new StudentSchemes({ name, phone, email, message });
        await student.save();
        res
            .status(200)
            .json({ message: "Student data saved successfully!", student });
    }
    catch(error) {
        console.log("Error in saving student data", err);
    }
};
module.exports = { StudentData };
