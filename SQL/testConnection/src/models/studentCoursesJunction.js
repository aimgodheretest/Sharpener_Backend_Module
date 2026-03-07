const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../utils/db-connection");

const studentCoursesJunction = sequelize.define("studentcourses", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

module.exports = studentCoursesJunction;
