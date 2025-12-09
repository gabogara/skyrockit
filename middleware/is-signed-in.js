const isSignedIn = (req, res, next) => {
  //if user is logged in
  //go to next middleware
    if (req.session.user) return next();
  res.redirect("/auth/sign-in");
};

module.exports = isSignedIn;
