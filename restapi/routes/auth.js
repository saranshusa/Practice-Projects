const express = require("express");
const router = express.Router();
const Auth = require("../models/Auth");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  Auth.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({
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
      res.status(200).json({ message: "Login success!" });
    } else {
      res.status(401).json({ message: "Incorrect credentials!" });
    }
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

module.exports = router;
