require("dotenv").config();

const express = require("express");
const session = require("express-session");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
