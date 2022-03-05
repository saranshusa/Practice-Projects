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
  const hashedPass = await bcrypt.hash(req.body.password, 10);
  const User = new Auth({
    email: req.body.email,
    password: hashedPass,
  });

  User.save()
    .then(res.status(201).json({ message: "Account created successfully!" }))
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

// LOGIN
router.post("/login", async (req, res) => {
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

// RESET PASSWORD
router.post("/sendotp", async (req, res) => {
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
      subject: "OTP for password reset request",
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

module.exports = router;
