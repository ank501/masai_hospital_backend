const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:String,
    pass:String,
    confirmPass:String
})

const userModel =mongoose.model("user",userSchema);

module.exports=userModel