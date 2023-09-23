// importing all module-------->
const express = require("express");
const { authorizeMiddleware } = require("../middleware/authorize.middleware");
const { getSellerProducts, addProducts, updateProducts, deleteProduct, getSellerProductById } = require("../controllers/seller.products.controllers");



// create sellerProduct route instancce -------->
const sellerProductRouter = express.Router();


// get all product posted by seller---->
sellerProductRouter.get("/",authorizeMiddleware("seller"),getSellerProducts);

// get product by ID---->
sellerProductRouter.get("/:id",authorizeMiddleware("seller"),getSellerProductById);

// add new Product----->
sellerProductRouter.post("/addProduct",authorizeMiddleware("seller"),addProducts);

// update existing product------>
sellerProductRouter.patch("/updateProduct/:id",authorizeMiddleware("seller"),updateProducts);

// delete a perticular product---->
sellerProductRouter.delete("/deleteProduct/:id",authorizeMiddleware("seller"),deleteProduct)


// export module------->
module.exports={
    sellerProductRouter
}