const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const keys = require("../config/keys");

router.get("/", async (req, res) => {
  const query = req.query.data;
  fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${keys.app_id}&app_key=${keys.app_key}`
  )
    .then(results => results.json())
    .then(json => {
      const results = [];
      json.hits.map(item => results.push(item.recipe));
      res.json(results);
    });
});

module.exports = router;
