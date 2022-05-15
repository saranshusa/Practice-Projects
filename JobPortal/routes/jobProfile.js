const express = require("express");
const router = express.Router();
const Auth = require("../models/Auth");
const Account = require("../models/Account");
const Job = require("../models/Job");
const FeaturedJobs = require("../models/FeaturedJobs");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const ShortUniqueId = require("short-unique-id");
const key = new ShortUniqueId();

// NEW JOB LISTING
router.post("/post-job", async (req, res) => {
  try {
    const TryAccount = await Account.findOne({ email: req.body.email });
    if (TryAccount === null)
      return res.status(404).json({ message: "Company not registered!" });

    const User = await Auth.findOne({
      email: req.body.email,
      sessionKey: req.body.sessionKey,
    });
    if (User === null)
      return res.status(401).json({ message: "Invalid session! Login again." });

    const jobID = key.stamp(32);

    const Profile = new Job({
      companyName: TryAccount.companyName,
      email: TryAccount.email,
      companyType: TryAccount.companyType,
      phone: TryAccount.phone,
      city: TryAccount.city,
      country: TryAccount.country,
      address: TryAccount.address,
      social: TryAccount.social,
      website: TryAccount.website,
      aboutCompany: TryAccount.aboutCompany,
      logo: TryAccount.logo,
      companyID: TryAccount.companyID,
      vacancy: req.body.vacancy,
      jobType: req.body.jobType,
      experience: req.body.experience,
      jobDetails: req.body.jobDetails,
      jobTitle: req.body.jobTitle,
      jobCategory: req.body.jobCategory,
      salary: req.body.salary,
      requirements: req.body.requirements,
      jobID: jobID,
    });

    Profile.save()
      .then(res.status(201).json({ message: "Job Listed successfully!" }))
      .catch((err) => {
        res.status(500).json({
          message: err,
        });
      });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// GET ALL JOBS
router.get("/latest-jobs", async (req, res) => {
  const Jobs = await Job.find({ verified: true })
    .sort({})
    .limit(req.query.limit);

  if (Jobs === null) {
    return res.status(400).json({ message: "No Jobs found!" });
  }
  try {
    res.status(200).json({ data: Jobs });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// GET JOBS FOR COMPANY
router.get("/my-company-jobs", async (req, res) => {
  try {
    const User = await Auth.findOne({
      email: req.query.email,
      sessionKey: req.query.sessionKey,
    });
    if (User === null)
      return res.status(401).json({ message: "Invalid session! Login again." });

    const Jobs = await Job.find({ companyID: req.query.companyID })
      .sort({})
      .limit(req.query.limit);

    if (Jobs === null) {
      return res.status(400).json({ message: "No Jobs found!" });
    }
    res.status(200).json({ data: Jobs });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// JOB SEARCH
router.get("/search-jobs", async (req, res) => {
  try {
    const Jobs = await Job.find({ jobCategory: req.query.keyword })
      .sort({})
      .limit(req.query.limit);

    if (Jobs === null) {
      return res.status(400).json({ message: "No Jobs found!" });
    }
    res.status(200).json({ data: Jobs });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// GET FEATURED JOBS
router.get("/all-featured-jobs", async (req, res) => {
  const FeaturedJob = await FeaturedJobs.find({ verified: true })
    .sort({})
    .limit(req.query.limit);

  if (FeaturedJob === null) {
    return res.status(400).json({ message: "No Jobs found!" });
  }
  try {
    res.status(200).json({ data: FeaturedJob });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// TEST
// router.get("/delete", async (req, res) => {
//   await Job.remove({});
//   res.status(200).json({ message: "Success!" });
// });

module.exports = router;
