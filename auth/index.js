const passport = require("passport");

require("./google");
require("./github");
require("./discord");

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
