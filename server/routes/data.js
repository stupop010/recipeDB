const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const keys = require("../config/keys");

router.get("/", async (req, res) => {
  const { search, searchTo } = req.query;
  fetch(
    `https://api.edamam.com/search?q=${search}&app_id=${keys.app_id}&app_key=${keys.app_key}&from=0&to=${searchTo}`
  )
    .then(results => results.json())
    .then(json => {
      const results = [];
      json.hits.map(item => results.push(item.recipe));
      res.json(results);
    });
});

module.exports = router;
