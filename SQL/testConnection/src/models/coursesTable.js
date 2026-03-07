const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../utils/db-connection");

const courses = sequelize.define("courses", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = courses;
