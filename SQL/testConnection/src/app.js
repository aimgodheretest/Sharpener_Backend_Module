const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

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

  const creationQuary = `create table Students(
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

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port:3000");
});
