const mongoose = require("mongoose");

const FeaturedJobsSchema = mongoose.Schema({
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
    required: true,
  },
  aboutCompany: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
  },
  companyID: {
    type: String,
    required: true,
  },
  vacancy: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  jobDetails: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  jobCategory: {
    type: Array,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    default: "NA",
  },
  jobID: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("FeaturedJobs", FeaturedJobsSchema);
