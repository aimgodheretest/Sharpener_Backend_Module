const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Singh@2026",
  database: "bus_booking_app",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connection Created to the DB!");

  //USERS TABLE
  const userTableCreationQuery = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL 
  )`;

  connection.execute(userTableCreationQuery, (err) => {
    if (err) {
      console.log(err);
      connection.end();
      return;
    }
    console.log("Users Table Created!");
  });

  //BUSES TABLE
  const busTableCreationQuery = `CREATE TABLE IF NOT EXISTS buses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber VARCHAR(255) NOT NULL ,
    totalSeats INT NOT NULL,
    availableSeats INT NOT NULL
  )`;

  connection.execute(busTableCreationQuery, (err) => {
    if (err) {
      console.log(err);
      connection.end();
      return;
    }
    console.log("Buses Table Created!");
  });
});

module.exports = connection;
