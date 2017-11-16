const express = require('express');
const router = express.Router();
const sequelize = require('../models').sequelize;
const Account = require('../models').Account;

router.get('/', (req, res) => {
  Account.findAll().then(accounts => {
    res.send({accounts});
  })
})

router.post('/', (req, res) => {
  var data = req.body;
  res.send({data});
})

module.exports = function (rootRouter) {
  rootRouter.use('/account', router)
}