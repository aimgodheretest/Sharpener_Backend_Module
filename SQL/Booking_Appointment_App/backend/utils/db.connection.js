const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Singh@2026",
  database: "booking_appointment_app",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`DataBase Connected...`);

  //CREATE USERS TABLE
  const userTableQuary = `CREATE TABLE  IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY ,
    name  VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL 
)`;

  connection.execute(userTableQuary, (err) => {
    if (err) {
      console.log(err);
      connection.end();
      return;
    }

    console.log(`Users Table Created...`);
  });
});

module.exports = connection;
