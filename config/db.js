// importing all module-------->
const mongoose = require("mongoose");
require("dotenv").config();

//Db conncetion -------->
const connection = mongoose.connect(process.env.MONGO_URL);

//export modules---->
module.exports={
    connection
}