const express = require('express');
const router = express.Router();
const Account = require('../models').Account;

/** 
 * @description Fetch all accounts GET request
 * @method GET
 * No params
 * 
 * @returns array of Account objects
 */
router.get('/', async (req, res) => {

  var accounts = await Account.findAll();

  res.json(accounts);
});


/** 
 * @description Fetch all accounts GET request
 * @method POST
 * 
 * @returns newly created Account object
 */
router.post('/', async (req, res) => {
  var data = req.body;

  var newAccount = await Account.create(data);
  res.json(newAccount);
});

router.put('/', async (req, res) => {
  var data = req.body;

  res.json(data);
});

router.delete('/:id', async (req, res) => {

  res.json({})
});

module.exports = function (rootRouter) {
  rootRouter.use('/account', router)
}