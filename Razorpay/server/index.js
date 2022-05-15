const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

// app.use("/files", express.static(__dirname + "/uploads"));

const razorpayRoute = require("./routes/razorpay");

app.use("/api", razorpayRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Running" });
});

mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true }, () => {
  console.log("DB connected");
});

app.listen(PORT || 5000, () => console.log(`Server started on PORT ${PORT}`));
