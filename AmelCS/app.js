const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv/config");
const genUsername = require("unique-username-generator");
const generator = require("generate-password");

const Auth = require("./models/Auth");
const UserAuth = require("./models/UserAuth");

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Running" });
});

// ADMIN SIGNUP
app.post("/adminsignup", async (req, res) => {
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

// ADMIN LOGIN
app.post("/adminlogin", async (req, res) => {
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

// USER SIGNUP
app.post("/signup", async (req, res) => {
  const ifUserExists = await UserAuth.findOne({ email: req.body.email });
  if (ifUserExists != null) {
    return res.status(400).json({ message: "Email already registered!" });
  }

  const username = genUsername.generateUsername();

  // Check for username duplicacy
  const ifUsernameExists = await UserAuth.findOne({ username: username });
  if (ifUsernameExists != null) {
    const username = genUsername.generateUsername();
  }
  var password = generator.generate({
    length: 10,
    numbers: true,
  });

  const User = new UserAuth({
    email: req.body.email,
    username: username,
    password: password,
  });

  User.save()
    .then(
      res.status(201).json({
        message: "Account created successfully!",
        username: username,
        password: password,
      })
    )
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

// USER LOGIN
app.post("/login", async (req, res) => {
  const User = await UserAuth.findOne({ username: req.body.username });
  if (User == null) {
    return res.status(400).json({ message: "User not registered!" });
  }
  try {
    if (req.body.password == User.password) {
      res
        .status(200)
        .json({ message: "Login success!", username: User.username });
    } else {
      res.status(401).json({ message: "Incorrect credentials!" });
    }
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// POST DATA
app.post("/data", async (req, res) => {
  const User = await UserAuth.findOne({ username: req.body.username });
  if (User == null) {
    return res.status(400).json({ message: "User not found!" });
  }
  try {
    await UserAuth.updateOne(
      { username: req.body.username },
      { $set: { data: req.body.data } }
    ).then(res.status(200).json({ message: "Files saved!" }));
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// GET DATA
app.get("/data/:username", async (req, res) => {
  const User = await UserAuth.findOne({ username: req.params.username });
  if (User == null) {
    return res.status(400).json({ message: "User not found!" });
  }
  try {
    res.status(200).json({ data: User.data });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// TEST
app.get("/test", async (req, res) => {
  await UserAuth.remove({});
  res.status(200).json({ message: "Success!" });
});

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("Database connected...");
});

app.listen(PORT || 5000, () => console.log(`Server started on PORT ${PORT}`));
