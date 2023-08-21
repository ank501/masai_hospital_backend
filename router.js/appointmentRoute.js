const express=require("express");
const appointmentModel = require("../model/appointmentModel");
require('dotenv').config();

const appointmentRouter =express.Router()

appointmentRouter.post("/",async(req,res)=>{
    try {
        const appointment = await appointmentModel.create(req.body)
        appointment.save();
        res.status(200).send({"msg":"appointement is created successfully",appointment})
    } catch (error) {
        res.status(400).send({"msg" :error})
    }
})

module.exports = appointmentRouter