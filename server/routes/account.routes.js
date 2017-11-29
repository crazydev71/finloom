const express = require('express');
const router = express.Router();
const Account = require('../models').Account;
const AccountListEntry = require('../models').AccountListEntry;
const AccountBankType = require('../models').AccountBankType;
const Domain = {
  email: require('../models').EmailDomain,
  web: require('../models').WebDomain
};
const baseAPI = require('./base');

const emailTypes = ['email', 'web'];
const emailPrimaryTypes = ['primaryEmailDomain', 'primaryWebDomain'];

router.use(baseAPI('Account'));

router.get('/get/all', async (req, res) => {
  const items = await Account.findAll();
  let domains = {};
  for (let i = 0; i < emailTypes.length; i++) {
    domains[emailTypes[i]] = await Domain[emailTypes[i]].findAll();
  }
  res.json({items, domains});
});

var buildHierachy = function (items, base, hierachy, key = 'parentId') {
  if (items.length == 0 || base.length == 0)
    return hierachy;
  let newBase = [];
  let newItems = items.concat([]);
  for (let i = 0; i < base.length; i++) {
    let ary = newItems.filter(item => {
      return base[i].id == item[key];
    })
    newItems = newItems.filter(item => {
      return base[i].id != item[key];
    })
    newBase = newBase.concat(ary);
  }
  let newHierachy = hierachy.concat(newBase);
  return buildHierachy(newItems, newBase, newHierachy, key);
}

router.get('/get/hierachy/:id', async(req, res) => {
  const {id} = req.params;
  let items = await Account.findAll();
  items = items.map(item => {
    return item.toJSON();
  })
  
  let base = items.filter(item => {
    return item.id == id;
  })
  items = items.filter(item => {
    return item.id != id;
  })
  
  let hierachy = buildHierachy(items, base, base);
  res.json({hierachy});
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

router.put('/update/:id', async (req, res) => {
  const {id} = req.params;
  const data = req.body;

  let item = await Account.findById(id);

  if (item) {
    let domains = {};
    for (let i = 0; i < emailPrimaryTypes.length; i++) {
      let param = emailTypes[i] + 'Domain';
      let postData = {
        id: data[emailPrimaryTypes[i]],
        name: data[param]
      }
      domains[emailTypes[i]] = await Domain[emailTypes[i]].upsert(postData);
    }
    
    item = await item.update(data);
    return res.json({item, domains});
  } else {
    return res.status(404).json({msg: "Invalid request"});
  }
});

router.delete('/delete/:id', async (req, res) => {
  const {id} = req.params;

  let item = await Account.findById(id);

  if (item) {
    let where = {accountId: id};
    for (let i = 0; i < emailTypes.length; i++) {
      await Domain[emailTypes[i]].destroy({where});
    }
    await AccountBankType.destroy({where});
    await AccountListEntry.destroy({where});

    await Account.destroy({where: {id}});
    res.json({item});
  } else {
    return res.status(404).json({msg: "Invalid request"});
  }
});

module.exports = function (rootRouter) {
  rootRouter.use('/account', router)
}