const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");

// ADMIN LOGIN
router.post("/adminlogin", async (req, res) => {
  const User = await Admin.findOne({ email: req.body.email });
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

// ADMIN SIGNUP
router.post("/adminsignup", async (req, res) => {
  const ifUserExists = await Admin.findOne({ email: req.body.email });
  if (ifUserExists != null) {
    return res.status(400).json({ message: "Email already registered!" });
  }
  const hashedPass = await bcrypt.hash(req.body.password, 10);
  const User = new Admin({
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

// TEST
// router.get("/delete", async (req, res) => {
//   await Job.remove({});
//   res.status(200).json({ message: "Success!" });
// });

module.exports = router;
