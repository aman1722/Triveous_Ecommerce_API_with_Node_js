// importing all module-------->
const express = require("express");
const { body, param } = require("express-validator");
const { addToCart, getCart, quantityDecrement, quantityIncrement, removeProductFromCart } = require("../controllers/cart.controllers");
const { authMiddleware } = require("../middleware/auth.middleware");


// create a cart route instance------->
const cartRouter = express.Router();

// post a cart----->
cartRouter.post("/add",[
    body("product")
      .notEmpty()
      .withMessage("Product ID is required")
      .isMongoId()
      .withMessage("Invalid product ID"),
],authMiddleware,addToCart);


// retrive cart------->
cartRouter.get("/",authMiddleware,getCart)

// decrement cart quantity---->
cartRouter.patch("/decrement/:id",[
    param("id")
      .notEmpty()
      .withMessage("Product ID is required")
      .isMongoId()
      .withMessage("Invalid product ID"),
],authMiddleware,quantityDecrement)

// increment cart quantity------>
cartRouter.patch("/increment/:id",[
    param("id")
      .notEmpty()
      .withMessage("Product ID is required")
      .isMongoId()
      .withMessage("Invalid product ID"),
],authMiddleware,quantityIncrement)


// delete cart----->
cartRouter.delete("/remove/:id",[
      param("id")
        .notEmpty()
        .withMessage("Product ID is required.")
        .isMongoId()
        .withMessage("Invalid product ID"),
    ],
    authMiddleware,
    removeProductFromCart
);

// module export------>
module.exports={
    cartRouter
}