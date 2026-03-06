const db = require("../utils/db-connection");

//POST
const addStudent = (req, res) => {
  const { name, email, age } = req.body;

  const addQuary = `INSERT INTO students (name,email,age) VALUES (?,?,?) `;

  db.execute(addQuary, [name, email, age], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
      return;
    }

    console.log("Values Has Been Inserted!");
    res.status(201).send(`Student with the name:${name} added to the API...`);
  });
};

//GET ALL STUDENTS;
const getAllStudent = (req, res) => {
  const getQuary = `SELECT * FROM students`;

  db.execute(getQuary, (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
      return;
    }

    res.status(200).json(result);
  });
};

//GET STUDENT BY ID
const getStudentByID = (req, res) => {
  const { id } = req.params;

  const getQuaryByID = `SELECT * FROM students WHERE id = ?`;

  db.execute(getQuaryByID, [id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
      return;
    }
    if (result.length === 0) {
      res.status(404).json({
        message: "Student not found!.",
      });
    }

    res.status(200).json(result[0]);
  });
};

//UPDATE STUDENT
const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  const updateQuary = `UPDATE students SET name=?,email=?,age=? WHERE id=?`;

  db.execute(updateQuary, [name, email, age, id], (err, result) => {
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
    console.log(`Student Has Been Updated with id:${id}...`);
    res.status(200).send(`Student with id:${id} has been updated...`);
  });
};

//DELETE STUDENT
const deleteStudent = (req, res) => {
  const { id } = req.params;

  const deleteQuary = `DELETE FROM students WHERE id=?`;
  db.execute(deleteQuary, [id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).send("Student Not Found!.");
      return;
    }

    console.log(`Student Has Been Deleted with id:${id}...`);
    res.status(200).send(`Student with id:${id} Deleted...`);
  });
};

module.exports = {
  addStudent,
  getAllStudent,
  getStudentByID,
  updateStudent,
  deleteStudent,
};
