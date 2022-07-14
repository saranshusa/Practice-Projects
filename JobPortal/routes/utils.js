const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Auth = require("../models/Auth");
const Account = require("../models/Account");
const CandidateAccount = require("../models/CandidateAccount");
const Job = require("../models/Job");
const Visits = require("../models/Visits");
const UploadedResume = require("../models/UploadedResume");
const Contact = require("../models/Contact");

// GET COUNT
router.get("/get-count", async (req, res) => {
  try {
    if (req.query.collection === "company") {
      const TryAccount = await Account.estimatedDocumentCount();
      return res.status(200).json({ data: TryAccount });
    }
    if (req.query.collection === "job") {
      const TryJob = await Job.estimatedDocumentCount();
      return res.status(200).json({ data: TryJob });
    }
    if (req.query.collection === "user") {
      const TryAccount = await Account.estimatedDocumentCount();
      const TryCandidateAccount =
        await CandidateAccount.estimatedDocumentCount();
      return res.status(200).json({ data: TryAccount + TryCandidateAccount });
    }

    const TryAccount = await Account.estimatedDocumentCount();
    const TryCandidateAccount = await CandidateAccount.estimatedDocumentCount();
    const TryJob = await Job.estimatedDocumentCount();
    const TryUploadedResume = await UploadedResume.estimatedDocumentCount();

    const count = {
      company: TryAccount,
      job: TryJob,
      candidates: TryCandidateAccount + TryUploadedResume,
    };
    res.status(200).json({ data: count });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// ADD WEBSITE HIT COUNT
router.get("/add-hit", async (req, res) => {
  try {
    const Count = await Visits.find({});
    console.log(Count);

    res.status(200).json({ Count });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// CONTACT FORM
router.post("/contact", async (req, res) => {
  try {
    const ContactData = new Contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: "hrs.solutions2022@gmail.com",
      subject: "Contact Query - AmelCS Jobs",
      text: `NAME - ${req.body.name} ; EMAIL - ${req.body.email} ; PHONE - ${req.body.phone} ; MESSAGE - ${req.body.message}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(500).json({ message: "Error in sending Mail!" });
      }
    });

    ContactData.save()
      .then(res.status(201).json({ message: "Submitted Successfully!" }))
      .catch((err) => {
        res.status(500).json({
          message: err,
        });
      });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

module.exports = router;
