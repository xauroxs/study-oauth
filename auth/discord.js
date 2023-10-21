const passport = require("passport");

const DiscordStrategy = require("passport-discord").Strategy;

passport.use(
  new DiscordStrategy(
    {
      clientID: "1165181998332125184",
      clientSecret: "Q3aL7MhgfIfcA6ynnd33gtj5TyqTOU5U",
      callbackURL: "http://localhost:3000/auth/discord/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
