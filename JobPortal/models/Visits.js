const mongoose = require("mongoose");

const VisitsSchema = mongoose.Schema({
  count: {
    type: Number,
  },
});

module.exports = mongoose.model("VisitorCount", VisitsSchema);
