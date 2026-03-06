const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "Singh@2026", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connection to the DB has been Created!.`);
  } catch (error) {
    console.log(error);
  }
})(); //iife

module.exports = sequelize;

// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Singh@2026",
//   database: "testdb",
// });

// connection.connect((err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Connection Created to the DB!");

//   const creationQuary = `create table IF NOT EXISTS Students(
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(50),
//         email VARCHAR(50)
//   )`;
//   connection.execute(creationQuary, (err) => {
//     if (err) {
//       console.log(err);
//       connection.end();
//       return;
//     }
//     console.log("Table Created!");
//   });
// });

// module.exports = connection;
