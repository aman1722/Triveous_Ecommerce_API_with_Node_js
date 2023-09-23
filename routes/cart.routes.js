// importing all module-------->
const express = require("express");
const { body, param } = require("express-validator");
const { addToCart, getCart, quantityDecrement, quantityIncrement, removeProductFromCart } = require("../controllers/cart.controllers");



// create a cart route instance------->
const cartRouter = express.Router();

// post a cart----->
cartRouter.post("/add",[
    body("product")
      .notEmpty()
      .withMessage("Product ID is required")
      .isMongoId()
      .withMessage("Invalid product ID"),
],addToCart);


// retrive cart------->
cartRouter.get("/",getCart)

// decrement cart quantity---->
cartRouter.patch("/decrement/:id",[
    param("id")
      .notEmpty()
      .withMessage("Product ID is required")
      .isMongoId()
      .withMessage("Invalid product ID"),
],quantityDecrement)

// increment cart quantity------>
cartRouter.patch("/increment/:id",[
    param("id")
      .notEmpty()
      .withMessage("Product ID is required")
      .isMongoId()
      .withMessage("Invalid product ID"),
],quantityIncrement)


// delete cart----->
cartRouter.delete("/delete/:id",[
      param("id")
        .notEmpty()
        .withMessage("Product ID is required.")
        .isMongoId()
        .withMessage("Invalid product ID"),
    ],
    removeProductFromCart
);

// module export------>
module.exports={
    cartRouter
}