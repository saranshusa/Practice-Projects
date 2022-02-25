const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: false,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Auth", AuthSchema);
