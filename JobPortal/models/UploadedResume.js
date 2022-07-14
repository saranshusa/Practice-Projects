const mongoose = require("mongoose");

const UploadedResumeSchema = mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  cv: {
    type: String,
  },
  jobProfile: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UploadedResume", UploadedResumeSchema);
