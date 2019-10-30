const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  displayName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fieldname: {
    type: Sequelize.STRING
  },
  originalname: {
    type: Sequelize.STRING
  },
  encoding: {
    type: Sequelize.STRING
  },
  mimetype: {
    type: Sequelize.STRING
  },
  destination: {
    type: Sequelize.STRING
  },
  filename: {
    type: Sequelize.STRING
  },
  path: {
    type: Sequelize.STRING
  },
  size: {
    type: Sequelize.INTEGER
  }
});

module.exports = User;
