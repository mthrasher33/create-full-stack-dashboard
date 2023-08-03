const express = require('express');
const Animal = require('../models/animal');
const ETLService = require('../services/etl/ETLService');

const router = express.Router();

router.get('/animals/list', async (req, res) => {
  const response = await Animal.find().catch((err) => {
    res.send(err);
    console.log(err);
  });
  if (response) {
    res.send(response);
  }
});

router.get('/animals/:slug', async (req, res) => {
  console.log(...req.params.slug);
  //const slug = req.params.slug;
  const response = await Report.find({ slug: req.params.slug }).catch((err) => {
    res.send(err);
    console.log(err);
  });

  if (response) {
    res.send(response);
  }
});

router.post('/animals', async (req, res) => {
  // need some validation here on the server
  const { name, type } = req.body;
  await Animal.create({ name: name, type: type, createdAt: Date.now() }).catch(
    (err) => {
      res.send(err);
      console.log(err);
    }
  );

  res.sendStatus(200);
});

router.post('/data', async (req, res) => {
  const { fileName } = req.body;
  const ETLProcess = new ETLService(fileName);
  const data = await ETLProcess.run();
  res.send(data);
});

module.exports = router;
