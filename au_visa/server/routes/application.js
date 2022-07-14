const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const Application = require("../models/Application");
const bcrypt = require("bcrypt");
const ShortUniqueId = require("short-unique-id");
const key = new ShortUniqueId();

// Admin Login
router.post("/new-application", async (req, res) => {
  try {
    const {
      fName,
      gName,
      vDesc,
      dNumber,
      country,
      vClass,
      vStream,
      vApplicant,
      vGrantDate,
      vExpiry,
      location,
      vStatus,
      vGrantNumber,
      entries,
      dob,
      aAfter,
      period,
      work,
      workplace,
      study,
      vConditions,
      file,
    } = req.body;

    const NewApplication = new Application({
      fName,
      gName,
      vDesc,
      dNumber,
      country,
      vClass,
      vStream,
      vApplicant,
      vGrantDate,
      vExpiry,
      location,
      vStatus,
      vGrantNumber,
      entries,
      dob,
      aAfter,
      period,
      work,
      workplace,
      study,
      vConditions,
      file,
    });

    NewApplication.save()
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

// ALL APPLICATIONS
router.get("/get-all-applications", async (req, res) => {
  try {
    const Applications = await Application.find({});

    if (Applications === null) {
      return res.status(400).json({ message: "No Applications found!" });
    }
    res.status(200).json(Applications);
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// GET APPLICATION ENQUIRY
router.get("/enquire-application", async (req, res) => {
  let { dNumber, country, vGrantNumber, dob } = req.query;
  try {
    const Applications = await Application.findOne({
      dNumber,
      country,
      vGrantNumber,
      dob,
    });

    console.log({ dNumber, country, vGrantNumber, dob });

    if (Applications === null) {
      return res.status(400).json({ message: "No Applications found!" });
    }
    res.status(200).json(Applications);
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// DELETE APPLICATION
router.post("/delete", async (req, res) => {
  try {
    let { id } = req.body;
    const result = await Application.findByIdAndDelete(id);
    res.status(200).json(result);
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
