const express = require('express');
const router = express.Router();
const Account = require('../models').Account;

/** Fetch all accounts GET request
 * @param no params
*/
router.get('/', async (req, res) => {
  var accounts = await Account.findAll();

  res.json(accounts);
});

router.post('/', (req, res) => {
  var data = req.body;

  var newAccount = await Account.create(data);
  res.json(newAccount);
});

router.delete('/:id', (req, res) => {
  res.json({})
});

module.exports = function (rootRouter) {
  rootRouter.use('/account', router)
}