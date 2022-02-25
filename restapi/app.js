const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const PORT = process.env.PORT;

app.use(bodyParser.json());

const postsRoute = require("./routes/posts");
const authRoute = require("./routes/auth");

app.use("/posts", postsRoute);
app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.send("We are on home");
});

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("Database connected...");
});

app.listen(PORT || 5000, () => console.log(`Server started on PORT ${PORT}`));
