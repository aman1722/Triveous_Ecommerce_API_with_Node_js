// importing all module-------->
const express = require("express");
const { placeOrder, orderHistory, getOrderById, updateStatus } = require("../controllers/order.controllers");
const { authorizeMiddleware } = require("../middleware/authorize.middleware");


// create a order route intance---->
const orderRouter = express.Router();

// post a order---->
orderRouter.post("/",placeOrder);

// get order history----->
orderRouter.get("/history",orderHistory);

// get order by its ID----->
orderRouter.get("/:id",getOrderById)

// update status of product----->
orderRouter.patch("/updateStatus/:id",authorizeMiddleware("seller"),updateStatus)


// export module------>
module.exports={
    orderRouter
}