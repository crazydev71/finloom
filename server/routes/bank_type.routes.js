const express = require('express');
const router = express.Router();
const BankType = require('../models').BankType;
const baseAPI = require('./base');

router.use(baseAPI('BankType'));

module.exports = function (rootRouter) {
  rootRouter.use('/banktype', router)
}