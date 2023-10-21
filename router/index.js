const express = require("express");

const auth = require("./auth");

const router = express.Router();

router.get("/", (req, res) => {
  const googleLink = '<a href="/auth/google">Authenticate with Google</a>';
  const githubLink = '<a href="/auth/github">Authenticate with GitHub</a>';
  const discordLink = '<a href="/auth/discord">Authenticate with Discord</a>';

  res.send(`${googleLink}<br />${githubLink}<br />${discordLink}`);
});

module.exports = () => {
  auth(router);

  return router;
};
