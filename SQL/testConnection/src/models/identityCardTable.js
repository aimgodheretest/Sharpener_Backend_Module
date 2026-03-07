const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../utils/db-connection");

const Identitycard = sequelize.define("Identitycard", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  cardNo: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = Identitycard;
