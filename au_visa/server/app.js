const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

app.use("/files", express.static(__dirname + "/uploads"));

const adminRoute = require("./routes/admin");
const applicationRoute = require("./routes/application");

app.use("/api", adminRoute);
app.use("/api", applicationRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Running" });
});

mongoose.connect(process.env.DB_CONNECT1, { useNewUrlParser: true }, () => {
  console.log("Database connected...");
});

app.listen(PORT || 5000, () => console.log(`Server started on PORT ${PORT}`));
