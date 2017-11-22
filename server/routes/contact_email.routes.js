const express = require('express');
const router = express.Router();
const ContactEmail = require('../models').ContactEmail;
const baseAPI = require('./base');

router.use(baseAPI('ContactEmail'));

module.exports = function (rootRouter) {
  rootRouter.use('/contact-email', router)
}