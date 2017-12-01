const express = require('express');
const router = express.Router();
const ContactList = require('../models').ContactList;
const baseAPI = require('./base');

router.use(baseAPI('ContactList'));

router.post('/:id', async (req, res) => {
  const {id} = req.params;
  const data = req.body;
  const ContactXListModel = require('../models')['ContactXList'];
  for (var i = 0; i < data.ContactIds.length; i++)
  {
    const idata = {contactId: data.ContactIds[i], contactListId: id};
    await ContactXListModel.create(idata, {include: [{all: true, nested: true}]});
  }
  return res.status(200).json({msg: "Success"});
});

module.exports = function (rootRouter) {
  rootRouter.use('/contact-list', router);
}