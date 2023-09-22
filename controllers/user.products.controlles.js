const { ProductModel } = require("../models/product.model");




const getProducts = async (req, res) => {
    try {

        const { sort, category } = req.query;
        const filter = category ? { category } : {};
        const sortOption = sort === "asc" ? { price: 1 } : sort === "desc" ? { price: -1 } : {};
        const allProducts = await ProductModel.find(filter).sort(sortOption);

        res.status(200).send({ products: allProducts });
    } catch (error) {
        console.log('/user/products/: ', error.message);
        res.status(501).send({ msg: "Internal Server error", error: error.message });
    }
}


const getCategories = async (req, res) => {
    try {
        const categories = await ProductModel.aggregate([
            { $group: { _id: "$category" } },
            { $project: { _id: 0, category: "$_id" } },
        ]);

        if (categories.length === 0) {
            return res.status(404).json({ message: "No Categories Found" });
        }

        res.status(200).json(categories);
    } catch (error) {
        console.log('/user/products/categories: ', error.message);
        res.status(501).send({ msg: "Internal Server error", error: error.message });
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductModel.find({ _id: id });

        if (!product) {
            return res.status(404).send({ message: `Product with ID ${id} not found.` });
        }
        res.status(200).send(product);
    } catch (error) {
        console.log('/user/products/getProductById: ', error.message);
        res.status(501).send({ msg: "Internal Server error", error: error.message });
    }
}

module.exports = {
    getProducts, getCategories, getProductById
}