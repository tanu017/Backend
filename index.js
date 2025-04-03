// const http = require("http");
// const express = require("express");
// const app = express();
// app.use(express.json());
// const server = http.createServer(app);
// app.get("/", (req, res) => {
//     res.send("Hello world");
// });
// app.get("/getstudent", (req, res) => {
//     res.send("This is student route");
// });
// app.post("/studentinfo", (req, res) => {
//     const {name, phone } = req.body;
//     console.log("Name: ", name);
//     console.log("Phone number: ", phone);
//     res.send("Data recieved successfully!");
// });
// server.listen(4001, () => {
//     console.log("Server started at 4001");
// })
const mongoose = require("mongoose");
const express = require("express");
const http = require("http");
require("dotenv").config();
const app = require("./app.js");
const Connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to database successfully");
    }
    catch(err) {
        console.log("Error in connecting to the database", err);
    }
};
Connect()   
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server started successfully at ${process.env.PORT}` );
        });
    })
    .catch((err) => {
        console.log("Error occured in starting the server", err);
    });
