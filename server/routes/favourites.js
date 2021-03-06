const express = require("express");

const router = express.Router();

const isAuth = require("../middleware/isAuth");
const UserFavouriteItem = require("../models/userFavouriteItem");

const getFavouritesData = require("../utils/getFavouritesData");

router.post("/", isAuth, async (req, res) => {
  try {
    const { uri, label } = req.body;
    const favourite = await UserFavouriteItem.create({
      label,
      uri,
      userId: req.user.id
    });
    res.json(favourite.dataValues);
  } catch (err) {
    console.error(err);
  }
});

router.get("/", isAuth, async (req, res) => {
  try {
    const favourites = await UserFavouriteItem.findAll({
      where: {
        userId: req.user.id
      }
    });
    const data = getFavouritesData(favourites);
    res.json(data);
  } catch (err) {
    console.error(err);
  }
});

router.delete("/", isAuth, async (req, res) => {
  try {
    const { id } = req.body;
    await UserFavouriteItem.destroy({
      where: {
        id
      }
    });
    res.json(id);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
