const express = require('express');
const router = express.Router();
const ContactList = require('../models').ContactList;
const baseAPI = require('./base');

router.use(baseAPI('ContactList'));

module.exports = function (rootRouter) {
  rootRouter.use('/contact-list', router)
}