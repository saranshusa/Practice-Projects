const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

const postsRoute = require("./routes/posts");
const authRoute = require("./routes/auth");
const mailRoute = require("./routes/mail");

app.use("/posts", postsRoute);
app.use("/auth", authRoute);
app.use("/mail", mailRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Running" });
});

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("Database connected...");
});

app.listen(PORT || 5000, () => console.log(`Server started on PORT ${PORT}`));
