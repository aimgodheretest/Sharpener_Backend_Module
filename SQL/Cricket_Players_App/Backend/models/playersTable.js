const { DataTypes } = require("sequelize");
const sequelize = require("../utils/dbConnection");

const Player = sequelize.define("Player", {
  name: DataTypes.STRING,

  dob: DataTypes.STRING,

  photoUrl: DataTypes.STRING,

  birthplace: DataTypes.STRING,

  career: DataTypes.TEXT,

  matches: DataTypes.INTEGER,

  score: DataTypes.INTEGER,

  fifties: DataTypes.INTEGER,

  centuries: DataTypes.INTEGER,

  wickets: DataTypes.INTEGER,

  average: DataTypes.FLOAT,
});

module.exports = Player;
