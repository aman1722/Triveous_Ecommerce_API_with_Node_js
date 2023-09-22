const { ProductModel } = require("../models/product.model");




const getSellerProducts = async (req, res) => {
    try {
        const { userId } = req.body;
        const products = await ProductModel.find({ userId });
        res.status(200).send({ allProducts: products });
    } catch (error) {
        console.log('/seller/products/: ', error.message);
        res.status(501).send({ msg: "Internal Server error", error: error.message });
    }
}


const addProducts = async (req, res) => {
    try {
        const requireFields = [
            "title",
            "category",
            "price",
            "description",
            "image",
            "availability"
        ];
        const missingFields = requireFields.filter((field) => !req.body[field]);
        if (missingFields.length > 0) {
            return res.status(400).send({
                message: `Missing required fields: ${missingFields.join(", ")}`,
            });
        }
        const newProduct = new ProductModel({ ...req.body });
        await newProduct.save();

        res.status(201).send({ msg: "New Product Added" })
    } catch (error) {
        console.log('/seller/products/addProdcuts: ', error.message);
        res.status(501).send({ msg: "Internal Server error", error: error.message });
    }
}


const updateProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;

        const product = await ProductModel.findOne({ _id: id });

        if (product.userId == req.body.userId) {
            await ProductModel.findByIdAndUpdate({ _id: id }, payload);
            res.status(200).send({ msg: "Product Updated" });
        } else {
            res.status(401).send({ msg: "Seller Can not update other sellers Product" })
        }

    } catch (error) {
        console.log('/seller/products/updateProducts: ', error.message);
        res.status(501).send({ msg: "Internal Server error", error: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await ProductModel.findOne({ _id: id });

        if (product.userId == req.body.userId) {
            await ProductModel.findByIdAndDelete({ _id: id });
            res.status(200).send({ msg: "Product Deleted" });
        } else {
            res.status(401).send({ msg: "Seller Can not delete other sellers Product" })
        }

    } catch (error) {
        console.log('/seller/products/deleteProduct: ', error.message);
        res.status(501).send({ msg: "Internal Server error", error: error.message });
    }
}

const getSellerProductById = async(req,res)=>{
    try {
        const { id } = req.params;
        const product = await ProductModel.findOne({ _id: id });
        if (product.userId == req.body.userId) {
            const reqProduct = await ProductModel.findById({ _id: id });
            res.status(200).send(reqProduct);
        } else {
            res.status(401).send({ msg: "Seller Can not get other sellers Product" })
        }

    } catch (error) {
        
    }
}
module.exports = {
    getSellerProducts, addProducts, updateProducts, deleteProduct,getSellerProductById
}