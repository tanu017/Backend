const express = require("express");
const { StudentData } = require("./src/controller/student_controller");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyparser.json());
app.post("/studentinfo", StudentData);
module.exports = app;
