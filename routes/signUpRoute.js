const express=require("express")
const userRoute=express.Router()
const userController=require("../controllers/signUp.Controller")


userRoute.post("/signup",userController.addUser)

module.exports=userRoute
