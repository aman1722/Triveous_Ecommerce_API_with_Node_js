const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    availability: {
        type: Boolean,
        default: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel",
        required: true,
    }
})


const ProductModel = mongoose.model("product",productSchema);


module.exports={
    ProductModel
}