const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('http://localhost:3001/');
  } else {
    next();
  }
};

module.exports = withAuth;