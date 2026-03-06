const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Singh@2026",
  database: "studentDB",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Connetion Created to the DB!`);

  //CREATE STUDENT TABLE
  const studentTableCreationQuary = `CREATE TABLE IF NOT EXISTS students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    age INT
  )`;

  connection.execute(studentTableCreationQuary, (err) => {
    if (err) {
      console.log(err);
      connection.end();
      return;
    }
    console.log(`Student Table Created!.`);
  });
});

module.exports = connection;
