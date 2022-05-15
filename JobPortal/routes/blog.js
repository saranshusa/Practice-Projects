const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const Blog = require("../models/Blog");

// NEW BLOG LISTING
router.post("/post-blog", async (req, res) => {
  try {
    const TryAdmin = await Admin.findOne({
      email: req.body.email,
      sessionKey: req.body.sessionKey,
    });
    if (TryAdmin === null)
      return res.status(401).json({ message: "Invalid session! Login again." });

    const Post = new Blog({
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
      date: req.body.date,
    });

    Post.save()
      .then(res.status(201).json({ message: "Blog added successfully!" }))
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

// TEST
// router.get("/delete", async (req, res) => {
//   await Job.remove({});
//   res.status(200).json({ message: "Success!" });
// });

module.exports = router;
