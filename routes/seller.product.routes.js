const express = require("express");
const { authMiddleware } = require("../middleware/auth.middleware");
const { authorizeMiddleware } = require("../middleware/authorize.middleware");
const { getSellerProducts, addProducts, updateProducts, deleteProduct, getSellerProductById } = require("../controllers/seller.products.controllers");

const sellerProductRouter = express.Router();



sellerProductRouter.get("/",authMiddleware,authorizeMiddleware("seller"),getSellerProducts);


sellerProductRouter.get("/getProductById/:id",authMiddleware,authorizeMiddleware("seller"),getSellerProductById);


sellerProductRouter.post("/addProduct",authMiddleware,authorizeMiddleware("seller"),addProducts);


sellerProductRouter.patch("/updateProduct/:id",authMiddleware,authorizeMiddleware("seller"),updateProducts);


sellerProductRouter.delete("/deleteProduct/:id",authMiddleware,authorizeMiddleware("seller"),deleteProduct)



module.exports={
    sellerProductRouter
}