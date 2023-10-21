const google = require("./google");
const github = require("./github");
const discord = require("./discord");

module.exports = (router) => {
  router.get("/auth/logout", (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }

      req.session.destroy();
      res.send("Goodbye!");
    });
  });

  router.get("/auth/failure", (req, res) => {
    res.send("Something went wrong!");
  });

  google(router);
  github(router);
  discord(router);
};
