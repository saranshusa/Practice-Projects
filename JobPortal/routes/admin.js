const express = require("express");
const router = express.Router();
const Auth = require("../models/Auth");
const Account = require("../models/Account");
const CandidateAccount = require("../models/CandidateAccount");
const Job = require("../models/Job");
const Admin = require("../models/Admin");
const FeaturedJobs = require("../models/FeaturedJobs");
const UploadedResume = require("../models/UploadedResume");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const ShortUniqueId = require("short-unique-id");
const key = new ShortUniqueId();

// Admin Login
router.post("/admin-login", async (req, res) => {
  try {
    const TryAdmin = await Admin.findOne({ email: req.body.email });
    if (TryAdmin === null)
      return res.status(401).json({ message: "Invalid credentials!" });

    if (await bcrypt.compare(req.body.password, TryAdmin.password)) {
      const sessionKey = key.stamp(32);
      await Admin.findOneAndUpdate(
        { email: req.body.email },
        { $set: { sessionKey: sessionKey } }
      );
      res.status(200).json({
        message: "Login success!",
        email: req.body.email,
        sessionKey: sessionKey,
      });
    } else {
      res.status(401).json({ message: "Invalid credentials!" });
    }
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// Admin Signup
// router.post("/admin-signup", async (req, res) => {
//   try {
//     const Account = await Admin.findOne({ email: req.body.email });
//     if (Account !== null)
//       return res.status(400).json({ message: "Email already registered!" });

//     const hashedPass = await bcrypt.hash(req.body.password, 10);
//     const User = new Admin({
//       email: req.body.email,
//       password: hashedPass,
//     });

//     User.save()
//       .then(res.status(201).json({ message: "Account created successfully!" }))
//       .catch((err) => {
//         res.status(500).json({
//           message: err,
//         });
//       });
//   } catch {
//     res.status(500).json({ message: "Error" });
//   }
// });

// GET ALL JOBS
router.get("/admin-all-jobs", async (req, res) => {
  try {
    const TryAdmin = await Admin.findOne({
      email: req.query.email,
      sessionKey: req.query.sessionKey,
    });
    if (TryAdmin === null)
      return res.status(401).json({ message: "Invalid session! Login again." });

    const Jobs = await Job.find().sort({}).limit(req.query.limit);

    if (Jobs === null) {
      return res.status(400).json({ message: "No Jobs found!" });
    }

    res.status(200).json({ data: Jobs });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// CHANGE VERIFIED STATUS
router.post("/admin-jobs-change-verified", async (req, res) => {
  try {
    const TryAdmin = await Admin.findOne({
      email: req.body.email,
      sessionKey: req.body.sessionKey,
    });
    if (TryAdmin === null)
      return res.status(401).json({ message: "Invalid session! Login again." });

    await Job.findOneAndUpdate(
      { jobID: req.body.jobID },
      { $set: { verified: req.body.verified } }
    );

    res.status(201).json({ message: "Status changed!" });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// GET ALL USERS
router.get("/admin-all-users", async (req, res) => {
  try {
    const TryAdmin = await Admin.findOne({
      email: req.query.email,
      sessionKey: req.query.sessionKey,
    });
    if (TryAdmin === null)
      return res.status(401).json({ message: "Invalid session! Login again." });

    const TryAuth = await Auth.find({}).sort({}).limit(req.query.limit);

    if (TryAuth === null) {
      return res.status(400).json({ message: "No Users found!" });
    }
    res.status(200).json({ data: TryAuth });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// FEATURED JOB ADD
router.post("/admin-add-featured-job", async (req, res) => {
  try {
    const TryAdmin = await Admin.findOne({
      email: req.body.email,
      sessionKey: req.body.sessionKey,
    });
    if (TryAdmin === null)
      return res.status(401).json({ message: "Invalid session! Login again." });

    const TryJob = await Job.findOne({ jobID: req.body.jobID });
    if (TryJob === null) {
      return res.status(400).json({ message: "Invalid Job ID!" });
    }

    const TryFeaturedJob = await FeaturedJobs.findOne({
      jobID: req.body.jobID,
    });
    if (TryFeaturedJob !== null) {
      return res
        .status(400)
        .json({ message: "Already added to Featured Jobs!" });
    }

    let { _id, __v, timestamp, verified, ...data } = TryJob._doc;

    if (verified === false) {
      return res.status(400).json({ message: "Please Verify the Job first!" });
    }

    const FeaturedJob = new FeaturedJobs({ ...data, verified: true });

    FeaturedJob.save()
      .then(res.status(201).json({ message: "Added to Featured Jobs!" }))
      .catch((err) => {
        res.status(500).json({
          message: err,
        });
      });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// FEATURED JOB REMOVE
router.post("/admin-remove-featured-job", async (req, res) => {
  try {
    const TryAdmin = await Admin.findOne({
      email: req.body.email,
      sessionKey: req.body.sessionKey,
    });
    if (TryAdmin === null)
      return res.status(401).json({ message: "Invalid session! Login again." });

    const TryFeaturedJob = await FeaturedJobs.findOne({
      jobID: req.body.jobID,
    });
    if (TryFeaturedJob === null) {
      return res.status(400).json({ message: "Not found in Featured Jobs!" });
    } else {
      await FeaturedJobs.remove({ jobID: req.body.jobID });
      res.status(200).json({ message: "Deleted successfully!" });
    }
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// GET ALL CANDIDATES
router.get("/admin-all-candidates", async (req, res) => {
  try {
    const TryAdmin = await Admin.findOne({
      email: req.query.email,
      sessionKey: req.query.sessionKey,
    });
    if (TryAdmin === null)
      return res.status(401).json({ message: "Invalid session! Login again." });

    const TryCandidateAccount = await CandidateAccount.find({})
      .sort({})
      .limit(req.query.limit);

    return res.status(200).json({ data: TryCandidateAccount });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// GET ALL RESUME
router.get("/admin-all-resume", async (req, res) => {
  try {
    const TryAdmin = await Admin.findOne({
      email: req.query.email,
      sessionKey: req.query.sessionKey,
    });
    if (TryAdmin === null)
      return res.status(401).json({ message: "Invalid session! Login again." });

    const TryUploadedResume = await UploadedResume.find({})
      .sort({})
      .limit(req.query.limit);

    return res.status(200).json({ data: TryUploadedResume });
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
