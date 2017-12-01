const express = require('express');
const router = express.Router();
const ContactList = require('../models').ContactList;
const baseAPI = require('./base');
const ContactXListModel = require('../models')['ContactXList'];

router.post('/:id', async (req, res) => {
  const {id} = req.params;
  const data = req.body;
  for (var i = 0; i < data.contactIds.length; i++)
  {
    const idata = {contactId: data.contactIds[i], contactListId: id};
    await ContactXListModel.create(idata, {include: [{all: true, nested: true}]});
  }
  return res.status(200).json({msg: "Success"});
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const item = await ContactList.findById(id);
  const contacts = await ContactXListModel.findAll({where:{contactListId: id}});

  var ret = item.toJSON();
  ret.contacts = contacts;
  if (item)
    return res.json(ret);
  else
    return res.status(404).json({msg: "Invalid request"});
});

router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  let item = await ContactList.findById(id);

  await ContactXListModel.delete({where:{contactListId: id}});

  if (item) {
    await item.destroy();
    res.json({deletedId: id});
  } else {
    res.status(404).json({msg: "Invalid request"});
  }
});

router.delete('/:id/contacts', async (req, res) => {
  const {id} = req.params;
  const data = req.body;
  let contactIds = data.contactIds;

  for(var i = 0; i < contactIds.length; i++)
  {
    let contact = await ContactXListModel.findById(contactIds[i]);
    await contact.destroy();
  }

  return res.status(200).json({msg: "Success"});
});

router.use(baseAPI('ContactList'));

module.exports = function (rootRouter) {
  rootRouter.use('/contact-list', router);
}