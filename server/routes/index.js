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
require('./bank_type.routes.js')(router);
require('./email_domain.routes.js')(router);
require('./web_domain.routes.js')(router);


const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated) {
    next();
  } else {
    res.status(413).json({msg: 'Authentication Error'});
  }
};

/**
 * @description User login
 * @method POST
 * @param email
 * @param password
 * @returns authenticated contact
 */
router.post('/login', passport.authenticate('local-login'), (req, res) => {
  if (req.user) {
    const contact = req.user;
    res.json(contact.toJSON());
  } else {
    res.status(413).json({msg: 'Invalid credentials'});
  }
});

/**
 * @description User sign up
 * @method POST
 * @param email
 * @param password
 * @returns Authenticated contact or error message
 */
router.post('/signup', passport.authenticate('local-signup'), (req, res) => {
  if (req.user) {
    const contact = req.user;
    req.login(contact, () => {
      res.json(contact.toJSON());
    });
  } else {
    res.status(413).json({msg: 'Invalid credentials'});
  }
});

/**
 * 
 */
router.get('/auth', isAuthenticated, (req, res) => {
  if (req.user)
    res.json(req.user.toJSON());
});

/**
 * @description User log out
 * @method GET
 * @returns log out success message
 */
router.get('/logout', (req, res) => {
  req.logout();
  res.json({msg: 'Logout success'});
});

module.exports = router;