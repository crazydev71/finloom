const express = require('express');
const router = express.Router();
const passport = require('../config/passport');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

require('./account.routes.js')(router);
require('./account_list.routes.js')(router);
require('./industry.routes.js')(router);
require('./role.routes.js')(router);
require('./contact.routes.js')(router);
require('./contact_list.routes.js')(router);
require('./contact_email.routes.js')(router);
require('./banktype.routes.js')(router);
require('./email_domain.routes.js')(router);
require('./web_domain.routes.js')(router);

router.post('/login', passport.authenticate('local-login', {failureFlash: true}), (req, res) => {
  if (req.user) {
    const contact = req.user;
    res.json(contact.toJSON());
  } else {
    res.status(413).json({msg: 'Invalid credentials'});
  }
});

router.post('/signup', passport.authenticate('local-signup', {failureFlash: true}), (req, res) => {
  if (req.user) {
    req.login();
    const contact = req.user;
    res.json(contact.toJSON());
  } else {
    res.status(413).json({msg: 'Invalid credentials'});
  }
})

module.exports = router;