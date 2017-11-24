const express = require('express');
const router = express.Router();
const EmailDomain = require('../models').EmailDomain;
const baseAPI = require('./base');

router.use(baseAPI('EmailDomain'));

module.exports = function (rootRouter) {
  rootRouter.use('/email-domain', router)
}