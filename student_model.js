const mongoose = require("mongoose");
const StudentSchemes = new mongoose.Schemes({
    name: {type:String, required: true}, 
    phone: {type:String, required: true}, 
    email: {type:String, required: true}, 
    message: {type:String, required: true}, 
});
module.exports = mongoose.model("StudentSchemes", StudentSchemes);
