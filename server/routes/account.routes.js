const express = require('express');
const router = express.Router();
const Account = require('../models').Account;
const AccountBankType = require('../models').AccountBankType;
const Domain = {
  email: require('../models').EmailDomain,
  web: require('../models').WebDomain
};
const baseAPI = require('./base');

router.use(baseAPI('Account'));

router.get('/get/all', async (req, res) => {
  const items = await Account.findAll();
  const emailTypes = ['email', 'web'];
  let domains = {};
  for (let i = 0; i < emailTypes.length; i++) {
    domains[emailTypes[i]] = await Domain[emailTypes[i]].findAll();
  }
  res.json({items, domains});
});

router.post('/create', async (req, res) => {
  const data = req.body;
  let domainData = data.domains;
  delete data.domains;
  let bankTypes = data.bankTypes;
  delete data.bankTypes;

  let item = await Account.create(data);
  item = item.toJSON();
  let itemBankTypes = [];
  let temp = { accountId: item.id };
  for (let i = 0; i < bankTypes.length; i++) {
    temp.bankTypeId = bankTypes[i];
    let bt = await AccountBankType.create(temp);
    itemBankTypes.push(bt);
  }

  const emailTypes = ['email', 'web'];
  const emailPrimaryTypes = ['primaryEmailDomain', 'primaryWebDomain'];
  let itemDomains = {};

  for (let i = 0; i < emailTypes.length; i++) {
    itemDomains[emailTypes[i]] = { domains: [] };
    temp.name = domainData[emailTypes[i]].primary;
    let primary = await Domain[emailTypes[i]].create(temp);
    item[emailPrimaryTypes[i]] = primary.id;
    itemDomains[emailTypes[i]].primary = primary;

    let domains = domainData[emailTypes[i]].domains;
    for (let j = 0; j < domains.length; j++) {
      temp.name = domains[j].name;
      let domain = await Domain[emailTypes[i]].create(temp);
      itemDomains[emailTypes[i]].domains.push(domain);
    }
  }

  await Account.upsert(item);
  item.domains = itemDomains;
  item.bankTypes = itemBankTypes;
  res.json({item});
});

module.exports = function (rootRouter) {
  rootRouter.use('/account', router)
}