const express = require('express');
const router = express.Router();
const AccountList = require('../models').AccountList;

/** 
 * @description Fetch all accounts 
 * @method GET
 * 
 * @returns array of AccountList objects
 */
router.get('/', async (req, res) => {
  var accountLists = await AccountList.findAll();
  
  res.json(accounts);
});

/** 
 * @description Create a new account list
 * @method POST
 *  
 * @returns Returns a new AccountList object
 */
router.post('/', async (req, res) => {
  var data = req.body;

  var newAccountList = await AccountList.create(data);

  res.json(newAccountList);
});

router.put('/', async (req, res) => {
  var data = req.body;

  res.json(data);
});

router.delete('/:id', async (req, res) => {

  res.json({})
});

module.exports = function (rootRouter) {
  rootRouter.use('/accountlist', router)
}