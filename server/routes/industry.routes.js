const express = require('express');
const router = express.Router();
const Industry = require('../models').Industry;
const baseAPI = require('./base');

router.use(baseAPI('Industry'));

module.exports = function (rootRouter) {
  rootRouter.use('/industry', router)
}