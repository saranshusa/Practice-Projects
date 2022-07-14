const mongoose = require("mongoose");

const ApplicationSchema = mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  gName: {
    type: String,
    required: true,
  },
  vDesc: {
    type: String,
    required: true,
  },
  dNumber: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: false,
  },
  vClass: {
    type: String,
    required: false,
  },
  vStream: {
    type: String,
    required: false,
  },
  vApplicant: {
    type: String,
    required: false,
  },
  vGrantDate: {
    type: String,
    required: false,
  },
  vExpiry: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  vStatus: {
    type: String,
    required: false,
  },
  vGrantNumber: {
    type: String,
    required: false,
  },
  entries: {
    type: String,
    required: false,
  },
  dob: {
    type: String,
    required: false,
  },
  aAfter: {
    type: String,
    required: false,
  },
  period: {
    type: String,
    required: false,
  },
  work: {
    type: String,
    required: false,
  },
  workplace: {
    type: String,
    required: false,
  },
  study: {
    type: String,
    required: false,
  },
  vConditions: {
    type: Array,
    required: false,
  },
  file: {
    type: String,
    required: false,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Applications_AU", ApplicationSchema);
