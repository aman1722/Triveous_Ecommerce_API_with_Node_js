// importing all module-------->
const express = require("express");
const { getProducts, getCategories, getProductById } = require("../controllers/user.products.controlles");

// create user product route instance-----> 
const userProductRouter = express.Router();


// get all products route------>
userProductRouter.get("/",getProducts);

// get all categories routee----->
userProductRouter.get("/categories",getCategories);

// get product by id route------->
userProductRouter.get("/getProductById/:id",getProductById);


// export module------->
module.exports={
    userProductRouter
}