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
const Applications = require("./models/Applications");

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

// ADMIN CHANGE PASSWORD
app.post("/adminchangepassword", async (req, res) => {
  const User = await Auth.findOne({ email: req.body.email });
  if (User == null) {
    return res.status(400).json({ message: "Email not registered!" });
  }
  try {
    if (await bcrypt.compare(req.body.password, User.password)) {
      const hashedPass = await bcrypt.hash(req.body.newPassword, 10);
      await Auth.updateOne(
        { email: req.body.email },
        { $set: { email: req.body.newEmail, password: hashedPass } }
      ).then(res.status(201).json({ message: "Email & Password Changed!" }));
    } else {
      res.status(401).json({ message: "Incorrect credentials!" });
    }
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// USER SIGNUP
app.post("/signup", async (req, res) => {
  const ifUserExists = await UserAuth.findOne({ username: req.body.username });
  if (ifUserExists != null) {
    return res.status(400).json({ message: "Username already registered!" });
  }

  // const username = genUsername.generateUsername();

  // // Check for username duplicacy
  // const ifUsernameExists = await UserAuth.findOne({ username: username });
  // if (ifUsernameExists != null) {
  //   const username = genUsername.generateUsername();
  // }
  // var password = generator.generate({
  //   length: 10,
  //   numbers: true,
  // });

  const User = new UserAuth({
    username: req.body.username,
    password: req.body.password,
  });

  User.save()
    .then(
      res.status(201).json({
        message: "Account created successfully!",
        username: req.body.username,
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

// POST LINKS
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

// GET LINKS
app.get("/links/:username/:anumber", async (req, res) => {
  console.log(req.params.username);
  console.log(req.params.anumber);
  const User = await UserAuth.findOne({ username: req.params.username });
  const Application = await Applications.findOne({
    username: req.params.username,
    anumber: req.params.anumber,
  });
  if (User == null) {
    return res.status(400).json({ message: "User not found!" });
  }
  console.log(Application);
  if (Application == null) {
    return res.status(400).json({ message: "Application not found!" });
  }
  try {
    res.status(200).json({ data: User.data });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// GET DATA
// app.get("/get", async (req, res) => {
//   const User = await UserAuth.findOne({ pnumber: req.query.pn });
//   if (User == null) {
//     return res.status(400).json({ message: "User not found!" });
//   }
//   try {
//     const data = {
//       ...User["_doc"],
//       password: null,
//       _id: null,
//       username: null,
//       timestamp: null,
//     };
//     res.status(200).json({ data });
//   } catch {
//     res.status(500).json({ message: "Error" });
//   }
// });

// VALIDATE USER
app.get("/validate/:username", async (req, res) => {
  const User = await UserAuth.findOne({ username: req.params.username });
  if (User == null) {
    return res.status(400).json({ message: "User not found!" });
  }
  try {
    res.status(200).json({ data: null });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// POST APPLICATION
app.post("/application", async (req, res) => {
  const User = await UserAuth.findOne({ username: req.body.username });
  if (User == null) {
    return res.status(400).json({ message: "User not found!" });
  }
  try {
    const Application = new Applications({
      username: req.body.username,
      atype: req.body.atype,
      anumber: req.body.anumber,
      aname: req.body.aname,
      datesubmit: req.body.datesubmit,
      currentstatus: req.body.currentstatus,
      messages: req.body.messages,
      action: req.body.action,
      uci: req.body.uci,
      pNumber: req.body.pNumber,
      country: req.body.country,
      bnumber: req.body.bnumber,
      dobenroll: req.body.dobenroll,
      edate: req.body.edate,
      lmia: req.body.lmia,
      province: req.body.province,
      msg1: req.body.msg1,
      msg2: req.body.msg2,
      msg3: req.body.msg3,
      msg4: req.body.msg4,
    });

    Application.save()
      .then(
        res.status(201).json({
          message: "Application added successfully!",
        })
      )
      .catch((err) => {
        res.status(500).json({
          message: err,
        });
      });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// VALIDATE USER
app.get("/application/:username", async (req, res) => {
  const Application = await Applications.find({
    username: req.params.username,
  });
  if (Application == null) {
    return res.status(400).json({ message: "No applications found!" });
  }
  try {
    res.status(200).json({ data: Application });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// TRACK LMIA
app.get("/status", async (req, res) => {
  const Application = await Applications.findOne({
    uci: req.query.uci,
    pNumber: req.query.pn,
    country: req.query.country,
  });
  if (Application === null) {
    return res.status(400).json({ message: "No applications found!" });
  }
  try {
    res.status(200).json({ data: Application });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// GET ALL APPLICATIONS
app.get("/all-applications", async (req, res) => {
  const Application = await Applications.find({});
  if (Application === null) {
    return res.status(400).json({ message: "No applications found!" });
  }
  try {
    res.status(200).json({ data: Application });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// DELETE AN APPLICATION
app.post("/delete-application", async (req, res) => {
  try {
    await Applications.findByIdAndRemove(req.body.ID);
    res.status(200).json({ message: "Application Deleted!" });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// UPDATE APPLICATION
app.post("/update-application", async (req, res) => {
  try {
    await Applications.findByIdAndUpdate(req.body.ID, {
      username: req.body.username,
      atype: req.body.atype,
      anumber: req.body.anumber,
      aname: req.body.aname,
      datesubmit: req.body.datesubmit,
      currentstatus: req.body.currentstatus,
      messages: req.body.messages,
      action: req.body.action,
      uci: req.body.uci,
      pNumber: req.body.pNumber,
      country: req.body.country,
      bnumber: req.body.bnumber,
      dobenroll: req.body.dobenroll,
      lmia: req.body.lmia,
      province: req.body.province,
    });

    res.status(201).json({
      message: "Application updated successfully!",
    });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// TEST
// app.get("/test", async (req, res) => {
//   await UserAuth.remove({});
//   res.status(200).json({ message: "Success!" });
// });

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("Database connected...");
});

app.listen(PORT || 5000, () => console.log(`Server started on PORT ${PORT}`));
