const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("expensetracker", "root", "Singh@2026", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
