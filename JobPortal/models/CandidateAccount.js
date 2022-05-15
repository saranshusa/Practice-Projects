const mongoose = require("mongoose");

const CandidateSchema = mongoose.Schema({
  email: {
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
  aboutYourself: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
    required: false,
    default: "NA",
  },
  cv: {
    type: String,
    required: true,
  },
  candidateID: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CandidateAccounts", CandidateSchema);
