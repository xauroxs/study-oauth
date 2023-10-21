require("dotenv").config();

const express = require("express");
const session = require("express-session");
const passport = require("passport");

const router = require("./router");

require("./auth");

const app = express();

app.use(session({ secret: process.env.SESSION_SECRET }));

app.use(passport.initialize());
app.use(passport.session());

app.use("/", router());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
