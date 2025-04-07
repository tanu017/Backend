const mongoose = require("mongoose");
const EmailSchemas = new mongoose.Schema({
    to: { type: String, required: true}, 
    subject: { type: String, required: true},
    text: { type: String, required: true},
    html: { type: String, required: true},
});
module.exports = mongoose.model("EmailSchemas", EmailSchemas);
