const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  isPaid: {
    type: Boolean,
  },
  amount: {
    type: Number,
  },
  razorpay: {
    orderId: String,
    paymentId: String,
    signature: String,
  },
});

module.exports = mongoose.model("Orders", OrderSchema);
