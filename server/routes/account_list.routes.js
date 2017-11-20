const express = require('express');
const router = express.Router();
const AccountList = require('../models').AccountList;
const baseAPI = require('./base');

router.use(baseAPI('AccountList'));

module.exports = function (rootRouter) {
  rootRouter.use('/account-list', router)
}