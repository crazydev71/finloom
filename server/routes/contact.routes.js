const express = require('express');
const router = express.Router();
const Contact = require('../models').Contact;
const baseAPI = require('./base');

router.use(baseAPI('Contact'));

module.exports = function (rootRouter) {
  rootRouter.use('/contact', router)
}