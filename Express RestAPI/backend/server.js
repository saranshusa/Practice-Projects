// Imports
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.port || 5000;

// Others
const app = express();

app.listen(port, () => console.log(`Server started on port ${port}`));
