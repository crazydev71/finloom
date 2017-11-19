const express = require('express');
const router = express.Router();
const Account = require('../models').Account;
const baseAPI = require('./base');

router.use(baseAPI('Account'));

module.exports = function (rootRouter) {
  rootRouter.use('/account', router)
}