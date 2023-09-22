const express = require("express");
const { body, param } = require("express-validator");
const { addToCart, getCart, quantityDecrement, quantityIncrement, removeProductFromCart } = require("../controllers/cart.controllers");
const { authMiddleware } = require("../middleware/auth.middleware");

const cartRouter = express.Router();


cartRouter.post("/add",[
    body("product")
      .notEmpty()
      .withMessage("Product ID is required")
      .isMongoId()
      .withMessage("Invalid product ID"),
],authMiddleware,addToCart);



cartRouter.get("/",authMiddleware,getCart)


cartRouter.patch("/decrement/:id",[
    param("id")
      .notEmpty()
      .withMessage("Product ID is required")
      .isMongoId()
      .withMessage("Invalid product ID"),
],authMiddleware,quantityDecrement)


cartRouter.patch("/increment/:id",[
    param("id")
      .notEmpty()
      .withMessage("Product ID is required")
      .isMongoId()
      .withMessage("Invalid product ID"),
],authMiddleware,quantityIncrement)


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


module.exports={
    cartRouter
}