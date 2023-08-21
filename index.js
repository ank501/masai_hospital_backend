const express  = require("express");
// const { connection } = require("mongoose");
const { connection } = require("./db");
const userRouter = require("./router.js/userRoute");
const appointmentModel = require("./model/appointmentModel");
const appointmentRouter = require("./router.js/appointmentRoute");
require('dotenv').config()


const app = express();

app.use(express.json());

app.use("/user",userRouter);
app.use("/appointment",appointmentRouter);

app.get("/",(req,res)=>{
    res.send("welcome to home page")
})

app.listen(process.env.PORT,async()=>{
    try {
        console.log(`server is running on ${process.env.PORT}`);
        await connection 
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }    
})