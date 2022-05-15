const express = require("express");
const router = express.Router();
const JobApplications = require("../models/JobApplications");
const Auth = require("../models/Auth");
const CandidateAccount = require("../models/CandidateAccount");
const Job = require("../models/Job");
const nodemailer = require("nodemailer");

// NEW JOB APPLICATION
router.post("/apply-job", async (req, res) => {
  try {
    const User = await Auth.findOne({
      email: req.body.email,
      sessionKey: req.body.sessionKey,
    });
    if (User === null)
      return res.status(401).json({ message: "Invalid session! Login again." });

    const Candidate = await CandidateAccount.findOne({
      email: req.body.email,
    });
    if (Candidate === null)
      return res.status(404).json({ message: "Complete Onboarding First!" });

    const TryApplication = await JobApplications.findOne({
      candidateID: Candidate.candidateID,
      jobID: req.body.jobID,
    });
    if (TryApplication !== null)
      return res.status(404).json({ message: "Already applied to this job!" });

    const Jobs = await Job.findOne({
      jobID: req.body.jobID,
    });

    const Application = new JobApplications({
      candidateID: Candidate.candidateID,
      jobID: req.body.jobID,
      name: User.name,
      cv: Candidate.cv,
      companyName: Jobs.companyName,
      jobTitle: Jobs.jobTitle,
    });

    Application.save()
      .then(res.status(201).json({ message: "Applied successfully!" }))
      .catch((err) => {
        res.status(500).json({
          message: err,
        });
      });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// GET COMPANY JOB APPLICATIONS
router.get("/company-job-applications", async (req, res) => {
  try {
    const User = await Auth.findOne({
      email: req.query.email,
      sessionKey: req.query.sessionKey,
    });
    if (User === null)
      return res.status(401).json({ message: "Invalid session! Login again." });

    const Applications = await JobApplications.find({
      jobID: req.query.jobID,
    });

    if (Applications === null) {
      return res.status(400).json({ message: "No Applications found!" });
    }
    res.status(200).json({ data: Applications });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// GET CANDIDATE JOB APPLICATIONS
router.get("/candidate-job-applications", async (req, res) => {
  try {
    const User = await Auth.findOne({
      email: req.query.email,
      sessionKey: req.query.sessionKey,
    });
    if (User === null)
      return res.status(401).json({ message: "Invalid session! Login again." });

    const Candidate = await CandidateAccount.findOne({
      email: req.query.email,
    });
    if (Candidate === null)
      return res.status(401).json({ message: "Complete Onboarding First" });

    const Applications = await JobApplications.find({
      candidateID: Candidate.candidateID,
    })
      .sort({})
      .limit(req.query.limit);

    if (Applications === null) {
      return res.status(400).json({ message: "No Applications found!" });
    }
    res.status(200).json({ data: Applications });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// TEST
// router.get("/delete", async (req, res) => {
//   await JobApplications.remove({});
//   res.status(200).json({ message: "Success!" });
// });

module.exports = router;
