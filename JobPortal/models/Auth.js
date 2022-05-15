const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  sessionKey: {
    type: String,
    required: false,
  },
  otp: {
    type: String,
    required: false,
  },
  onboarded: {
    type: Boolean,
    default: false,
    required: false,
  },
  role: {
    type: String,
    required: false,
    default: "",
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("JobsAuth", AuthSchema);
