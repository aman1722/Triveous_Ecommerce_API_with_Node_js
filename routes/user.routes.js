// importing all module-------->
const express = require("express");
const { body } = require("express-validator");
const { register, login, logout } = require("../controllers/user.controllers");
const { authMiddleware } = require("../middleware/auth.middleware");

// creating a user router instance----->
const userRouter = express.Router();



// register route----->
userRouter.post("/register", [
    body("username")
        .notEmpty()
        .withMessage("Username is required")
        .isLength({ min: 3 })
        .withMessage("Username must be atleast 3 characters"),
    body("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please provide a valid email"),
    body("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),
], register);



// login route------>
userRouter.post("/login",[
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Please provide a valid email"),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
], login);




// logout route--->
userRouter.post("/logout",authMiddleware, logout);




// module export---->
module.exports = {
    userRouter
}