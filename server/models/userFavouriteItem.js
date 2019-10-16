const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const UserFavouriteItem = sequelize.define("useFavouriteItem", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  uri: {
    type: Sequelize.STRING,
    allowNull: false
  },
  label: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = UserFavouriteItem;
