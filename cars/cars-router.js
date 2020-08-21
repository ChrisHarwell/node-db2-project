const express = require('express');
const db = require('../data/db-config.js');
const router = express.Router();

router.get("/", (req, res) => {
    db.select("*")
    .from("cars")
    .then((cars) => res.status(200).json({ data: cars }))
    .catch((err) => console.error(`Error: ${err.type}`));
});

router.post("/", (req, res) => {
    const carData = req.body;
    db("cars")
      .insert(carData)
      .then(() => res.status(201).json({ data: carData }))
      .catch((err) => console.log(err));
  });

  module.exports = router;