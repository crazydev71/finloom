const express = require('express');
const router = express.Router();
const WebDomain = require('../models').WebDomain;
const baseAPI = require('./base');

router.use(baseAPI('WebDomain'));

module.exports = function (rootRouter) {
  rootRouter.use('/web-domain', router)
}