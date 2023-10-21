const passport = require("passport");

const {
  isAuthenticatedWith,
  isLoggedIn,
} = require("../../middlewares/authentication.middleware");

module.exports = (router) => {
  router.get(
    "/auth/github",
    passport.authenticate("github", { scope: ["user"] })
  );

  router.get(
    "/auth/github/protected",
    isLoggedIn,
    isAuthenticatedWith("github"),
    (req, res) => {
      res.send(`Hello there, ${req.user.username}!`);
    }
  );

  router.get(
    "/auth/github/callback",
    passport.authenticate("github", {
      successRedirect: "/auth/github/protected",
      failureRedirect: "/auth/failure",
    })
  );
};
