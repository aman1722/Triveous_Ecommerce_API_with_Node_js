const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
require("dotenv").config();
const cors = require("cors");
const { userProductRouter } = require("./routes/user.product.routes");
const { sellerProductRouter } = require("./routes/seller.product.routes");
const { cartRouter } = require("./routes/cart.routes");
const { orderRouter } = require("./routes/order.routes");
const { authMiddleware } = require("./middleware/auth.middleware");




const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).send({msg:"Welcome To Ecommerce Api Backend"})
})


app.use("/user",userRouter);
app.use("/user/products",userProductRouter);
app.use(authMiddleware);
app.use("/seller/products",sellerProductRouter);
app.use("/cart",cartRouter);
app.use("/order",orderRouter);



app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log("Connected to db!");
    } catch (error) {
        console.log("Unable to connect db!");
        console.log(error.message);
    }
    console.log(`Server is Running on PORT ${process.env.PORT}!`)
})