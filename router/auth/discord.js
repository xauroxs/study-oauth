const passport = require("passport");

const {
  isAuthenticatedWith,
  isLoggedIn,
} = require("../../middlewares/authentication.middleware");

module.exports = (router) => {
  router.get(
    "/auth/discord/",
    passport.authenticate("discord", { scope: ["identify", "email"] })
  );

  router.get(
    "/auth/discord/protected",
    isLoggedIn,
    isAuthenticatedWith("discord"),
    (req, res) => {
      res.send(`Hello there, ${req.user.username}!`);
    }
  );

  router.get(
    "/auth/discord/callback",
    passport.authenticate("discord", {
      successRedirect: "/auth/discord/protected",
      failureRedirect: "/auth/failure",
    })
  );
};
