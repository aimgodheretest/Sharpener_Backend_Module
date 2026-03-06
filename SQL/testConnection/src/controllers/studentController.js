const db = require("../utils/db-connection");
const Student = require("../models/studentsTable");

//adding student using sequelize
const addEntries = async (req, res) => {
  try {
    const { name, email } = req.body;
    const student = await Student.create({
      name: name,
      email: email,
    });

    res.status(201).send(`Student with name:${name} is Created...`);
  } catch (error) {
    res.status(500).send(`Unable to make entry`);
  }

  // const insertQuary = "INSERT INTO Students (name,email) VALUES (?,?)";
  // db.execute(insertQuary, [name, email], (err) => {
  //   if (err) {
  //     console.log(err.message);
  //     res.status(500).send(err.message);
  //     db.end();
  //     return;
  //   }
  //   console.log("Values Has Been Inserted!");
  //   res.status(201).send(`Student with the name ${name} added to the DB.`);
  // });
};

const updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(404).send(`Student not found!`);
    }

    student.name = name;
    // student.email = email;
    await student.save();

    return res.status(200).send(`Studen got updated!`);
  } catch (error) {
    return res.status(500).send(`Student cannot updated!`);
  }
  // const updateQuary = "UPDATE Students set name= ?,email= ? WHERE id= ?";

  // db.execute(updateQuary, [name, email, id], (err, result) => {
  //   if (err) {
  //     console.log(err.message);
  //     res.status(500).send(err.message);
  //     db.end();
  //     return;
  //   }
  //   if (result.affectedRows === 0) {
  //
  // try {
  // } catch (error) {}
  // res.status(404).send("Student not found!");
  //     return;
  //   }
  //   console.log("Values Has Been Updated...");
  //   res.status(200).send(`User has been updated`);
  // });
};

const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.destroy({
      where: {
        id: id,
      },
    });

    if (!student) {
      res.status(404).send(`Student is not found!`);
    }
    res.status(200).send(`Student Deleted...`);
  } catch (error) {
    console.log(error);
    res.status(500).send(`Error while Deleting...`);
  }
  // const deleteQuary = "DELETE FROM Students WHERE id= ?";

  // db.execute(deleteQuary, [id], (err, result) => {
  //   if (err) {
  //     console.log(err.message);
  //     res.status(500).send(err.message);
  //     db.end();
  //     return;
  //   }
  //   if (result.affectedRows === 0) {
  //     res.status(404).send("Student not found!");
  //     return;
  //   }
  //   console.log("Values Has Been Deleted...");
  //   res.status(200).send(`User with id:${id} is deleted...`);
  // });
};
module.exports = { addEntries, updateEntry, deleteEntry };
