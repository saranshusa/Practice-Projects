const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const UploadedResume = require("../models/UploadedResume");
const ShortUniqueId = require("short-unique-id");
const key = new ShortUniqueId();

router.use(fileUpload());

// FILE UPLOAD
router.post("/upload", async (req, res) => {
  try {
    if (req.files === null)
      return res.status(400).json({ message: "No file uploaded!" });

    const file = req.files.file;
    const random = key.stamp(10);

    file.mv(`${__dirname}/../uploads/${random}_${file.name}`, (err) => {
      if (err) {
        return res.status(500).send(err);
      }

      res.json({
        message: "File uploaded successfully!",
        filePath: `https://amelcs-jobs.herokuapp.com/files/${random}_${file.name}`,
      });
    });
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// UPLOAD DIRECT RESUME
router.post("/upload-resume", async (req, res) => {
  try {
    const Upload = new UploadedResume({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      jobProfile: req.body.jobProfile,
      cv: req.body.cv,
    });

    Upload.save()
      .then(res.status(201).json({ message: "Resume Submitted Successfully!" }))
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
