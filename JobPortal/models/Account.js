const mongoose = require("mongoose");

const EmployerSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  companyType: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  social: {
    type: Object,
    required: true,
  },
  website: {
    type: String,
    required: false,
  },
  aboutCompany: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: false,
    default: "NA",
  },
  companyID: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("EmployerAccounts", EmployerSchema);
