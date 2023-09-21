const express = require("express");
const { connection } = require("./config/db");
require("dotenv").config();




const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send({msg:"Welcome To Ecommerce Api Backend"})
})







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