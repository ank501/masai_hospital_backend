const express=require("express");
const userModel = require("../model/userModel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();

const userRouter =express.Router()

userRouter.post("/signup",async(req,res)=>{
    const {email ,pass ,confirmPass} = req.body;
    try {
        bcrypt.hash(pass, 2,async function(err, hash) {
            const user =   await  userModel.create({email,pass:hash});
            if(pass==confirmPass){
             user.save()
             res.status(200).send({"msg":"user is registered" , "email":email})
            }else{
             res.status(400).send({"err":"Password did not matched"})
            }
        })
    } catch (error) {
        res.send(error)
    }
})

userRouter.post("/login",async(req,res)=>{
 const {email,pass} = req.body;
 try {
    const user = await userModel.findOne({email})
    console.log(user)
    if(!user){
        res.status(400).send({"msg":"user not found"})
    }else{
        bcrypt.compare(pass, user.pass, function(err, result) {
            if(result){
             var token = jwt.sign({ email : user.email },process.env.SECRETKEY);
             res.status(200).send({"msg":"user LoggedIn successfully" ,token})
            }else if (err){
             res.status(400).send(err)
            }
         })
    }
 } catch (error) {
    res.send(error)
 }

})


module.exports = userRouter