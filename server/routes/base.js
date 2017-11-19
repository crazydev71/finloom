const express = require('express');

module.exports = (modelName) => {
  const router = express.Router();
  const Model = require('../models')[modelName];

  router.get('/', async (req, res) => {
    const items = await Model.findAll();
    res.json(items);
  });

  router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const item = await Model.findById(id);

    if (item)
      return res.json(item.toJSON());
    else
      return res.status(404).json({msg: "Invalid request"});
  });

  router.post('/', async (req, res) => {
    const data = req.body;
    const item = await Model.create(data);
    res.json(item.toJSON());
  });

  router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const data = req.body;

    let item = await Model.findById(id);

    if (item) {
      await item.update(data);
      return res.json(item.toJSON());
    } else {
      return res.status(404).json({msg: "Invalid request"});
    }
  });

  router.delete('/:id', async (req, res) => {
    const {id} = req.parmas;
    let item = await Model.findById(id);

    if (item) {
      await item.destroy();
      res.json({deletedId: id});
    } else {
      res.status(404).json({msg: "Invalid request"});
    }
  });

  return router;
}