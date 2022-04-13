const express = require("express");
const router = express.Router();
const Auth = require("../models/Auth");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

router.get("/", (req, res) => {
  Auth.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    if (
      req.body.name === "" ||
      req.body.email === "" ||
      req.body.password === "" ||
      req.body.phone === ""
    )
      return res.status(500).json({ message: "Incomplete data submitted!" });

    const TryUser = await Auth.findOne({ email: req.body.email });
    if (TryUser !== null)
      return res.status(400).json({ message: "Email already registered!" });

    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const User = new Auth({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
      phone: req.body.phone,
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
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  if (
    req.body.name === "" ||
    req.body.email === "" ||
    req.body.password === "" ||
    req.body.phone === ""
  )
    return res.status(500).json({ message: "Incomplete data submitted!" });

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

// SEND OTP
router.post("/sendotp", async (req, res) => {
  if (
    req.body.name === "" ||
    req.body.email === "" ||
    req.body.password === "" ||
    req.body.phone === ""
  )
    return res.status(500).json({ message: "Incomplete data submitted!" });

  const User = await Auth.findOne({ email: req.body.email });
  if (User == null) {
    return res.status(400).json({ message: "Email not registered!" });
  }
  try {
    const OTP = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: req.body.email,
      subject: "AmelCS Jobs - Password Reset Code",
      text: `Hi ${req.body.email}! Your OTP is ${OTP}.`,
    };

    await Auth.findOneAndUpdate(
      { email: req.body.email },
      { $set: { otp: OTP } }
    );

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(500).json({ message: "Error in sending OTP!" });
      } else {
        res.status(200).json({ message: "OTP sent to email." });
      }
    });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// VERIFY OTP AND RESET PASSWORD
router.post("/verifyotp", async (req, res) => {
  const User = await Auth.findOne({ email: req.body.email });
  if (User == null) {
    return res.status(400).json({ message: "Email not registered!" });
  }
  try {
    if (User.otp === req.body.otp) {
      const hashedPass = await bcrypt.hash(req.body.password, 10);
      await Auth.findOneAndUpdate(
        { email: req.body.email },
        { $set: { password: hashedPass, otp: "" } }
      );
      return res.status(201).json({ message: "Password updated!" });
    } else {
      return res.status(401).json({ message: "Incorrect OTP!" });
    }
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

module.exports = router;
