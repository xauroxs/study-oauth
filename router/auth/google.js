const passport = require("passport");

const {
  isAuthenticatedWith,
  isLoggedIn,
} = require("../../middlewares/authentication.middleware");

module.exports = (router) => {
  router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
  );

  router.get(
    "/auth/google/protected",
    isLoggedIn,
    isAuthenticatedWith("google"),
    (req, res) => {
      res.send(`Hello there, ${req.user.displayName}!`);
    }
  );

  router.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      successRedirect: "/auth/google/protected",
      failureRedirect: "/auth/failure",
    })
  );
};
