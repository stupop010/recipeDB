const Sequelize = require("sequelize");
const sequelize = new Sequelize("node", "root", "test.12", {
  dialect: "mysql"
});

module.exports = sequelize;
