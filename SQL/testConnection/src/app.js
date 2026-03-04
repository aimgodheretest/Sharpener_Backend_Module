const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Singh@2026",
  database: "testDB",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Connection Created to the DB!");
  }
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port:3000");
});
