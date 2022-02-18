const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicvapidKey =
  "BF8dNhFGjoT2WvF3H5fTxa-SpQCvik6tXywZlk3fUDvDaCxR2mKyIc3bWV7_rDK1UGhySWF0YRXP5gwsc140JSw";
const privatevapidKey = "f-ILefeav2NFAZlGtznT58Gn0Ls3flxQNaUqyuyulLc";

webpush.setVapidDetails(
  "mailto:test@test.com",
  publicvapidKey,
  privatevapidKey
);


app.post("/subscribe", (req, res) => {
  const subscription = req.body;

  res.status(201).json({});

  const payload = JSON.stringify({ title: "New Message" });

  webpush
    .sendNotification(subscription, payload)
    .catch((err) => console.log(err));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
