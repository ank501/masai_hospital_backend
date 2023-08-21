const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    name:String,
    image:String,
    specialization:String,
    experience:String,
    location:String,
    date:String,
    slots:String,
    fee:Number

})

const appointmentModel =mongoose.model("appointments",appointmentSchema);

module.exports=appointmentModel