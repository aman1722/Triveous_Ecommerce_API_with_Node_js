const express = require("express");
const { authMiddleware } = require("../middleware/auth.middleware");
const { placeOrder } = require("../controllers/order.controllers");



const orderRouter = express.Router();


orderRouter.post("/",placeOrder)









module.exports={
    orderRouter
}