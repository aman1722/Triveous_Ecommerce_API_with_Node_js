const express = require("express");
require("dotenv").config();




const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send({msg:"Welcome To Ecommerce Api Backend"})
})







app.listen(process.env.PORT,async()=>{
    try {
        
    } catch (error) {
        
    }
    console.log(`Server is Running on PORT ${process.env.PORT}!`)
})