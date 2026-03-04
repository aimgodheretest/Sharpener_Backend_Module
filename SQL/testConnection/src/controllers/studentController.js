const db = require("../utils/db-connection");

const addEntries = (req, res) => {
  const { name, email } = req.body;
  const insertQuary = "INSERT INTO Students (name,email) VALUES (?,?)";

  db.execute(insertQuary, [name, email], (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
      return;
    }
    console.log("Values Has Been Inserted!");
    res.status(201).send(`Student with the name ${name} added to the DB.`);
  });
};

const updateEntry = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const updateQuary = "UPDATE Students set name= ?,email= ? WHERE id= ?";

  db.execute(updateQuary, [name, email, id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send("Student not found!");
      return;
    }
    console.log("Values Has Been Updated...");
    res.status(200).send(`User has been updated`);
  });
};

const deleteEntry = (req, res) => {
  const { id } = req.params;
  const deleteQuary = "DELETE FROM Students WHERE id= ?";

  db.execute(deleteQuary, [id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send("Student not found!");
      return;
    }
    console.log("Values Has Been Deleted...");
    res.status(200).send(`User with id:${id} is deleted...`);
  });
};
module.exports = { addEntries, updateEntry, deleteEntry };
