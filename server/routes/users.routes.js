const express = require('express');
const router = express.Router();
const sequelize = require('../config/sequelize.js');
const User = sequelize.import('../models/user.model.js');

router.get('/', (req, res) => {
  User.findAll().then(users => {
    res.send({users});
  })
})

router.post('/login', (req, res) => {
  var data = req.body;
  res.send({data});
})

module.exports = function (rootRouter) {
  rootRouter.use('/users', router)
}