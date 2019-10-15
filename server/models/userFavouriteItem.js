const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const UserFavouriteItem = sequelize.define("useFavouriteItem", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  _User: {
    type: Sequelize.INTEGER
  },
  data: {
    type: Sequelize.STRING
  }
});

module.exports = UserFavouriteItem;
