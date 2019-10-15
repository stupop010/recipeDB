const express = require("express");

const router = express.Router();

const UserFavouriteItem = require("../models/userFavouriteItem");

router.post("/", async (req, res) => {
  try {
    const recipeJson = JSON.stringify(req.body);
    console.log(req.user);
    // const favourite = await UserFavouriteItem.create({
    //   _User = req,
    //   data = recipeJson
    // })
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
