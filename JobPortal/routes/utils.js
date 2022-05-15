const express = require("express");
const router = express.Router();
const Auth = require("../models/Auth");
const Account = require("../models/Account");
const CandidateAccount = require("../models/CandidateAccount");
const Job = require("../models/Job");

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

    const count = {
      company: TryAccount,
      job: TryJob,
      user: TryAccount + TryCandidateAccount,
    };
    res.status(200).json({ data: count });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

module.exports = router;
