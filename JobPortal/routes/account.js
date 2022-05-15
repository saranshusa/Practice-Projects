const express = require("express");
const router = express.Router();
const Auth = require("../models/Auth");
const Account = require("../models/Account");
const CandidateAccount = require("../models/CandidateAccount");
const ShortUniqueId = require("short-unique-id");
const key = new ShortUniqueId();

// const ValidateSessionKey = async (email, sessionKey, req, res) => {
//   const User = await Account.findOne({ email: email });
//   if (User === null)
//     return res.status(400).json({ message: "Email not registered!" });
//   if (User.sessionKey !== sessionKey)
//     return res.status(401).json({ message: "Session expired!" });
// };

// EMPLOYER ONBOARDING
router.post("/employer-signup", async (req, res) => {
  try {
    // if (
    //   req.body.name === "" ||
    //   req.body.email === "" ||
    //   req.body.password === "" ||
    //   req.body.phone === ""
    // )
    //   return res.status(500).json({ message: "Incomplete data submitted!" });

    const TryAccount = await Account.findOne({ email: req.body.email });
    if (TryAccount !== null)
      return res.status(400).json({ message: "Onboarding already completed!" });

    const TryUser = await Auth.findOne({ email: req.body.email });
    if (TryUser === null)
      return res.status(400).json({ message: "Email not registered!" });
    if (TryUser.onboarded === true)
      return res
        .status(400)
        .json({ message: "Email is use for candidate account!" });

    const companyID = key.stamp(32);

    const Company = new Account({
      companyName: req.body.companyName,
      email: req.body.email,
      companyType: req.body.companyType,
      phone: req.body.phone,
      city: req.body.city,
      country: req.body.country,
      address: req.body.address,
      social: req.body.social,
      website: req.body.website === "" ? "NA" : req.body.website,
      aboutCompany: req.body.aboutCompany,
      logo: req.body.logo,
      companyID: companyID,
    });

    var success;

    Company.save()
      .then(
        (success = true)
        // res.status(201).json({ message: "Onboarding completed successfully!" })
      )
      .catch((err) => {
        res.status(500).json({
          message: err,
        });
      });

    if (success) {
      await Auth.findOneAndUpdate(
        { email: req.body.email },
        { $set: { onboarded: true, role: "company" } }
      );
      res.status(201).json({ message: "Onboarding completed successfully!" });
    }
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// CANDIDATE ONBOARDING
router.post("/candidate-signup", async (req, res) => {
  try {
    // if (
    //   req.body.name === "" ||
    //   req.body.email === "" ||
    //   req.body.password === "" ||
    //   req.body.phone === ""
    // )
    //   return res.status(500).json({ message: "Incomplete data submitted!" });

    const TryAccount = await CandidateAccount.findOne({
      email: req.body.email,
    });
    if (TryAccount !== null)
      return res.status(400).json({ message: "Onboarding already completed!" });

    const TryUser = await Auth.findOne({ email: req.body.email });
    if (TryUser === null)
      return res.status(400).json({ message: "Email not registered!" });
    if (TryUser.onboarded === true)
      return res
        .status(400)
        .json({ message: "Email is use for company account!" });

    const candidateID = key.stamp(32);

    console.log(req.body.resume);

    const Candidate = new CandidateAccount({
      email: req.body.email,
      phone: req.body.phone,
      city: req.body.city,
      country: req.body.country,
      address: req.body.address,
      social: req.body.social,
      website: req.body.website === "" ? "NA" : req.body.website,
      aboutYourself: req.body.aboutYourself,
      profilePhoto: req.body.profilePhoto,
      cv: req.body.cv,
      candidateID: candidateID,
    });

    var success;

    Candidate.save()
      .then(
        (success = true)
        // res.status(201).json({ message: "Onboarding completed successfully!" })
      )
      .catch((err) => {
        res.status(500).json({
          message: err,
        });
      });

    if (success) {
      await Auth.findOneAndUpdate(
        { email: req.body.email },
        { $set: { onboarded: true, role: "candidate" } }
      );
      res.status(201).json({ message: "Onboarding completed successfully!" });
    }
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// GET COMPANY DATA
router.get("/company-data", async (req, res) => {
  try {
    const User = await Auth.findOne({
      email: req.query.email,
      sessionKey: req.query.sessionKey,
    });
    if (User === null)
      return res.status(401).json({ message: "Invalid session! Login again." });

    const TryAccount = await Account.findOne({ email: req.query.email });
    if (TryAccount === null)
      return res.status(400).json({ message: "Complete onboarding first!" });

    res
      .status(200)
      .json({ data: { ...TryAccount._doc, _id: null, timestamp: null } });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// GET CANDIDATE DATA
router.get("/candidate-data", async (req, res) => {
  try {
    const User = await Auth.findOne({
      email: req.query.email,
      sessionKey: req.query.sessionKey,
    });
    if (User === null)
      return res.status(401).json({ message: "Invalid session! Login again." });

    const TryAccount = await CandidateAccount.findOne({
      email: req.query.email,
    });
    if (TryAccount === null)
      return res.status(400).json({ message: "Complete onboarding first!" });

    res
      .status(200)
      .json({ data: { ...TryAccount._doc, _id: null, timestamp: null } });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// EMPLOYER PROFILE UPDATE
router.post("/employer-update", async (req, res) => {
  try {
    const User = await Auth.findOne({
      email: req.body.email,
      sessionKey: req.body.sessionKey,
    });
    if (User === null)
      return res.status(401).json({ message: "Invalid session! Login again." });

    const TryAccount = await Account.findOne({ email: req.body.email });
    if (TryAccount === null)
      return res.status(400).json({ message: "Complete Onboarding First!" });

    await Account.findOneAndUpdate(
      { email: req.body.email },
      {
        $set: {
          companyType: req.body.companyType,
          phone: req.body.phone,
          city: req.body.city,
          country: req.body.country,
          address: req.body.address,
          social: req.body.social,
          website: req.body.website,
          aboutCompany: req.body.aboutCompany,
          logo: req.body.logo,
        },
      }
    );
    res.status(201).json({ message: "Profile Updated successfully!" });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// TEST;
// router.get("/delete", async (req, res) => {
//   await Account.remove({});
//   res.status(200).json({ message: "Success!" });
// });

module.exports = router;
