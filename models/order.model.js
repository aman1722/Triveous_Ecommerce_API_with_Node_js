const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
    required: true,
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
  grandTotal: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "placed",
  },
  orderedAt: {
    type: Date,
    default: Date.now,
  },
});

const OrderModel = mongoose.model("Order", orderSchema);

module.exports = {
    OrderModel
};