const { CartModel } = require("../models/cart.model");
const { OrderModel } = require("../models/order.model");





const placeOrder = async(req,res)=>{
    try {
        const {userId} = req.body;
    
        // Find the user's cart
        const cart = await CartModel.findOne({ user: userId }).populate(
          "items.product"
        );
    
        if (!cart || !cart.items.length) {
          return res.status(404).send({
            message: "Cart is empty",
          });
        }
    
        // Calculate the total order amount based on the items in the cart
        let totalAmount = 0;
        for (const item of cart.items) {
          totalAmount += item.product.price * item.quantity;
        }
    
        // Create a new order
        const order = new OrderModel({
          user: userId,
          items: cart.items.map((item) => ({
            product: item.product._id,
            quantity: item.quantity,
          })),
          grandTotal: totalAmount,
        });
    
        // Save the order
        await order.save();
    
        // Clear the user's cart after placing the order
        await CartModel.findOneAndRemove({ user: userId });
    
        res.status(201).send({ message: "Order placed successfully" });
      } catch (error) {
        console.log('/order/: ', error.message);
        res.status(501).send({ msg: "Internal Server error", error: error.message });
      }
}





module.exports={
    placeOrder
}