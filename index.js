const express=require("express");
//const mongoose = require("mongoose");
//const http=require("http");
require("dotenv").config();
const app=express();
const port=8080;
const mongoose = require('mongoose');


    const uri = "mongodb+srv://har:" +process.env.MONGO_PASSWORD +
    "@cluster0.ewsfbrt.mongodb.net/?retryWrites=true&w=majority";
    
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("MongoDB Connected…")
    })
    .catch(err => console.log(err))
app.get("/",(req,res) => {
    res.send("Hello World");
});
app.listen(port,() => {
    console.log("App is runiing on port : "+port);
})