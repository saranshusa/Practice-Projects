const mongoose = require("mongoose");

const ApplicationsSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  atype: {
    type: String,
    required: false,
    default: "",
  },
  anumber: {
    type: String,
    required: false,
    default: "",
  },
  aname: {
    type: String,
    required: false,
    default: "",
  },
  datesubmit: {
    type: String,
    required: false,
    default: "",
  },
  currentstatus: {
    type: String,
    required: false,
    default: "",
  },
  messages: {
    type: String,
    required: false,
    default: "",
  },
  action: {
    type: String,
    required: false,
    default: "",
  },
  uci: {
    type: String,
    required: false,
    default: "",
  },
  pNumber: {
    type: String,
    required: false,
    default: "",
  },
  country: {
    type: String,
    required: false,
    default: "",
  },
  bnumber: {
    type: String,
    required: false,
    default: "",
  },
  dobenroll: {
    type: String,
    required: false,
    default: "",
  },
  edate: {
    type: String,
    required: false,
    default: "",
  },
  lmia: {
    type: String,
    required: false,
    default: "",
  },
  province: {
    type: String,
    required: false,
    default: "",
  },
  msg1: {
    type: Array,
    required: false,
  },
  msg2: {
    type: Array,
    required: false,
  },
  msg3: {
    type: Array,
    required: false,
  },
  msg4: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("Applications", ApplicationsSchema);
