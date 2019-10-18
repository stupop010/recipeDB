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
    })
    .catch(err => {
      res.status(500).json({ errors: [{ msg: "Server Error" }] });
    });
});

router.get("/favourite", async (req, res) => {
  const uri = req.query.data;
  const recipeId = uri.split("_")[1];
  fetch(
    `https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${recipeId}&app_id=${keys.app_id}&app_key=${keys.app_key}`
  )
    .then(results => results.json())
    .then(recipe => {
      res.json(recipe[0]);
    })
    .catch(err => {
      res.status(500).json({ errors: [{ msg: "Server Error" }] });
    });
});

module.exports = router;
