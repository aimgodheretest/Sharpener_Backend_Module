const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Singh@2026",
  database: "testdb",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connection Created to the DB!");

  const creationQuary = `create table IF NOT EXISTS Students(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(50)
  )`;
  connection.execute(creationQuary, (err) => {
    if (err) {
      console.log(err);
      connection.end();
      return;
    }
    console.log("Table Created!");
  });
});

module.exports = connection;
