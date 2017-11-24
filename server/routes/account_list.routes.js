const express = require('express');
const router = express.Router();
const AccountList = require('../models').AccountList;
const Account = require('../models').Account;
const AccountListEntry = require('../models').AccountListEntry;
const baseAPI = require('./base');

AccountListEntry.belongsTo(Account);
AccountListEntry.belongsTo(AccountList);

router.use(baseAPI('AccountList'));

router.post('/update/:id', async (req, res) => {
  let { id } = req.params;
  let data = req.body.data;
  const items = await AccountListEntry.findAll({ where: { accountListId: id } });
  let duplicate = 0;
  if (items) {
    let existAccounts = items.map(item => {
      return item.accountId;
    })
    duplicate = data.accountIds.length;
    data = data.accountIds.filter(item => {
      return existAccounts.indexOf(item) == -1;
    })
    duplicate -= data.length;
  }
  let newItems = [];
  let temp = { accountListId: id };
  for (let i = 0; i < data.length; i++) {
    temp.accountId = data[i];
    let item = await AccountListEntry.create(temp);
    newItems.push(item);
  }
  res.json({ newItems, duplicate });
});

router.post('/delete/:id', async (req, res) => {
  let { id } = req.params;
  let data = req.body.data;
  const items = await AccountListEntry.findAll({ where: { accountListId: id } });
  let mismatching = 0;
  if (items) {
    mismatching = data.accountIds.length;
    data = items.filter(item => {
      return data.accountIds.indexOf(item.accountId) != -1;
    })
    mismatching -= data.length;
  }
  let deltedItems = [];
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    await item.destroy();
    deltedItems.push(item);
  }
  res.json({ deltedItems, mismatching });
});

router.get('/detail/:id', async (req, res) => {
  let { id } = req.params;
  const data = await AccountListEntry.findAll({ where: { accountListId: id }, include: [Account, AccountList] });
  res.json({ data });
});

router.delete('/destroy/:id', async (req, res) => {
  let { id } = req.params;
  const failedCount = await AccountListEntry.destroy({ where: { accountListId: id } });
  const failed = await AccountList.destroy({ where: { id } });
  res.json({ failed, failedCount });
})

module.exports = function (rootRouter) {
  rootRouter.use('/account-list', router)
}