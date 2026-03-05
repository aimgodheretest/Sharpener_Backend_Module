const db = require("../utils/db-connection");

//POST USERS
const addUser = (req, res) => {
  const { name, email } = req.body;

  const addQuary = `INSERT INTO users (name,email) VALUES (?,?)`;

  db.execute(addQuary, [name, email], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
      return;
    }
    res.status(201).send("User Added Successfully...");
  });
};

//GET USERS
const getUsers = (req, res) => {
  const getQuary = `SELECT * FROM users`;

  db.execute(getQuary, (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }

    res.status(200).json(result);
  });
};
module.exports = {
  addUser,
  getUsers,
};
