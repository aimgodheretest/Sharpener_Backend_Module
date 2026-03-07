const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("cricketdb", "root", "Singh@2026", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
