const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

const isAuthenticatedWith = (strategyName) => {
  return (req, res, next) => {
    if (req.isAuthenticated() && req.user.provider === strategyName) {
      return next();
    } else {
      res.send("YOU SHALL NOT PASS!");
    }
  };
};

module.exports = {
  isAuthenticatedWith,
  isLoggedIn,
};
