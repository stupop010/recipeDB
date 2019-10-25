const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Avatar = sequelize.define("avater", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  fieldname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  originalname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  encoding: {
    type: Sequelize.STRING,
    allowNull: false
  },
  mimetype: {
    type: Sequelize.STRING,
    allowNull: false
  },
  destination: {
    type: Sequelize.STRING,
    allowNull: false
  },
  filename: {
    type: Sequelize.STRING,
    allowNull: false
  },
  path: {
    type: Sequelize.STRING,
    allowNull: false
  },
  size: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Avatar;
