import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    }
  ],
  totalAmount: {
    type: Number,
    required: true
  },
  assigndDelivery: {
    type: String,
    default: "Not Assigned"
  },
  status: {
    type: String,
    default: "pending"
  },
  orderDate: {
    type: Date,
    default: Date.now
  }
});


const Order = mongoose.model("Order", orderSchema);
export default Order;