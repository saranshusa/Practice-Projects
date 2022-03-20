const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/", async (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  let mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: "PHP CRON NOTIFY",
    text: Date(),
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res
        .status(500)
        .json({ message: "Error in sending mail!", error: error, info: info });
    } else {
      res.status(200).json({ message: "Mail sent!" });
    }
  });
});

module.exports = router;
