const db = require("../utils/db.connection");

//CREATING USERS[POST METHOD]
const addUsers = (req, res) => {
  const { name, email, phone } = req.body;

  const addQuary = `INSERT INTO users(name,email,phone) VALUES(?,?,?)`;

  db.execute(addQuary, [name, email, phone], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).json(err);
      db.end();
      return;
    }

    console.log(`Users has been Added...`);
    res.status(201).json(`User Created...`);
  });
};
//RETRIEVING USERS[GET METHOD]
const getAllusers = (req, res) => {
  const getQuary = `SELECT * FROM users`;

  db.execute(getQuary, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).json(err);
      db.end();
      return;
    }

    res.status(200).json(result);
  });
};

//DELETING USERS[DELETE METHOD]
const deleteUsers = (req, res) => {
  const { id } = req.params;

  const deleteQuary = `DELETE FROM users WHERE id=?`;

  db.execute(deleteQuary, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
      db.end();
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).json(`User not found!`);
      return;
    }

    console.log(`User deleted...`);
    res.status(200).json(`User Deleted...`);
  });
};

module.exports = {
  addUsers,
  getAllusers,
  deleteUsers,
};
