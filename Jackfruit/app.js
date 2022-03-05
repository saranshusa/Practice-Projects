const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv/config");

const Auth = require("./models/Auth");

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Running" });
});

// SIGNUP
app.post("/signup", async (req, res) => {
  const ifUserExists = await Auth.findOne({ email: req.body.email });
  if (ifUserExists != null) {
    return res.status(400).json({ message: "Email already registered!" });
  }
  const hashedPass = await bcrypt.hash(req.body.password, 10);
  const User = new Auth({
    email: req.body.email,
    password: hashedPass,
  });

  User.save()
    .then(
      res
        .status(201)
        .json({ message: "Account created successfully!", id: User._id })
    )
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

// LOGIN
app.post("/login", async (req, res) => {
  const User = await Auth.findOne({ email: req.body.email });
  if (User == null) {
    return res.status(400).json({ message: "Email not registered!" });
  }
  try {
    if (await bcrypt.compare(req.body.password, User.password)) {
      res.status(200).json({ message: "Login success!", id: User._id });
    } else {
      res.status(401).json({ message: "Incorrect credentials!" });
    }
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// SAVE DATA
app.post("/data", async (req, res) => {
  const User = await Auth.findOne({ email: req.body.email });
  if (User == null) {
    return res.status(400).json({ message: "Email not registered!" });
  }
  if (User._id != req.body.id) {
    return res.status(401).json({ message: "Unauthorized!" });
  }
  try {
    await Auth.updateOne(
      { email: req.body.email },
      { $set: { data: req.body.data } }
    ).then(res.status(200).json({ message: "Data saved!" }));
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("Database connected...");
});

app.listen(PORT || 5000, () => console.log(`Server started on PORT ${PORT}`));
