const mongoose = require("mongoose");

const FileUploadRecordsSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("FileUploadRecords", FileUploadRecordsSchema);
