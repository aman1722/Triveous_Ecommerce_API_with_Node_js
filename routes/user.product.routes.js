const express = require("express");
const { getProducts, getCategories, getProductById } = require("../controllers/user.products.controlles");
const userProductRouter = express.Router();



userProductRouter.get("/",getProducts);

userProductRouter.get("/categories",getCategories);

userProductRouter.get("/getProductById/:id",getProductById);



module.exports={
    userProductRouter
}