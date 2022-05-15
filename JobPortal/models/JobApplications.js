const mongoose = require("mongoose");

const JobApplicationsSchema = mongoose.Schema({
  candidateID: {
    type: String,
    required: true,
  },
  jobID: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  cv: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("JobApplications", JobApplicationsSchema);
