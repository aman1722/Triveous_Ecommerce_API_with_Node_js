const express = require("express");
const { placeOrder, orderHistory, getOrderById, updateStatus } = require("../controllers/order.controllers");
const { authorizeMiddleware } = require("../middleware/authorize.middleware");



const orderRouter = express.Router();


orderRouter.post("/",placeOrder);



orderRouter.get("/history",orderHistory);


orderRouter.get("/:id",getOrderById)


orderRouter.patch("/updateStatus/:id",authorizeMiddleware("seller"),updateStatus)









module.exports={
    orderRouter
}