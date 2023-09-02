const express = require ("express")
const path = require('path');
const router = require ("./src/routes/api.js")
const app = express()
const bodyParser = require ("body-parser")

// Security Middleware 

const rateLimit = require("express-rate-limit")
const helmet = require ("helmet")
const mongoSanitize = require ("express-mongo-sanitize")
const hpp = require ("hpp")
const cors = require ("cors")


// Database 

const mongoose = require("mongoose")

// Security middleware Implementation 

app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())

// Body Parser Implementation 

app.use(bodyParser.json())


// Rate Limiter Implementation 

const limiter = rateLimit({windowsMS:15*60*100, max: 100})


// MongoDB Database Connection 

const URI = "mongodb+srv://testUser7777:testUser7777@cluster0.xzrgtm1.mongodb.net/e-com?retryWrites=true&w=majority";
const OPTIONS = { user: "testUser7777", pass: "testUser7777"};
mongoose.connect(URI, OPTIONS)
    .then(() => {
        console.log("Connection Success");
        // You can start your application or perform other operations here
    })
    .catch((error) => {
        console.error("Connection Failed:", error);
    })

// Managing BackEnd API Routing
app.use("/api/v1", router)






module.exports = app