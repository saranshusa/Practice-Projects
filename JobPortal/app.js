const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

app.use("/files", express.static(__dirname + "/uploads"));

const authRoute = require("./routes/auth");
const accountRoute = require("./routes/account");
const fileUploadRoute = require("./routes/fileUpload");
const jobProfileRoute = require("./routes/jobProfile");
const jobApplicationRoute = require("./routes/jobApplication");
const adminRoute = require("./routes/admin");
const blogRoute = require("./routes/blog");
const utilsRoute = require("./routes/utils");

app.use("/api", authRoute);
app.use("/api", accountRoute);
app.use("/api", fileUploadRoute);
app.use("/api", jobProfileRoute);
app.use("/api", jobApplicationRoute);
app.use("/api", adminRoute);
app.use("/api", blogRoute);
app.use("/api", utilsRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Running" });
});

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("Database connected...");
});

app.listen(PORT || 5000, () => console.log(`Server started on PORT ${PORT}`));
