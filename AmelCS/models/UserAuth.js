const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  data: {
    type: Array,
    required: false,
  },
  name: {
    type: String,
    required: false,
    default: "",
  },
  pnumber: {
    type: String,
    required: false,
    default: "",
  },
  nationality: {
    type: String,
    required: false,
    default: "",
  },
  astatus: {
    type: String,
    required: false,
    default: "",
  },
  ped: {
    type: String,
    required: false,
    default: "",
  },
  sfn: {
    type: String,
    required: false,
    default: "",
  },
  dob: {
    type: String,
    required: false,
    default: "",
  },
  sapplication: {
    type: String,
    required: false,
    default: "",
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("AmelcsCanadaUserAuth", AuthSchema);
