const express = require("express");
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

mongoose.connect("mongodb+srv://user:Sunday_1989@cluster0.pfhzac7.mongodb.net/").then(() => console.log("DB connection successful")).catch((err)=> console.log(err))

app.listen(5000, ()=> {
    console.log("Backend server is running")
})
