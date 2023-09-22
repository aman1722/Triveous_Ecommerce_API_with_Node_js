const express = require("express");
const { query } = require("express-validator");
const { register, login, logout } = require("../controllers/user.controllers");


const userRouter = express.Router();




userRouter.post("/register",register);

userRouter.post("/login",login);

userRouter.post("logout",logout);





module.exports={
    userRouter
}