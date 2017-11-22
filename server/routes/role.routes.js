const express = require('express');
const router = express.Router();
const Role = require('../models').Role;
const baseAPI = require('./base');

router.use(baseAPI('Role'));

module.exports = function (rootRouter) {
  rootRouter.use('/role', router)
}