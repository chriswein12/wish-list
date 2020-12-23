const withAuth = (req, res, next) => {
  console.log('req.session: ', req.session)
  if ((!req.session.user_id) || (!req.params.id)) {
    console.log('req.session.user_id: ', req.session.user_id)
    console.log('res.redirect: ', res.redirect)
    // window.location.assign('/')
    res.redirect('/');
  } else {
    next();
  }
};

module.exports = withAuth;