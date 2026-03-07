const db = require("../utils/db-connection");
const Students = require("../models/studentsTable");
const IdentityCard = require("../models/identityCardTable");
//adding student using sequelize
const addEntries = async (req, res) => {
  try {
    const { name, email } = req.body;
    const student = await Students.create({
      name: name,
      email: email,
    });

    res.status(201).send(`Student with name:${name} is Created...`);
  } catch (error) {
    res.status(500).send(`Unable to make entry`);
  }
};

const addvaluesToStudentsAndIdentityCardTable = async (req, res) => {
  try {
    const student = await Students.create(req.body.student);
    const idCard = await IdentityCard.create({
      ...req.body.IdentityCard,
      StudentId: student.id,
    });

    res.status(201).json({ student, idCard });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const student = await Students.findByPk(id);
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
};

const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Students.destroy({
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
};
module.exports = {
  addEntries,
  updateEntry,
  deleteEntry,
  addvaluesToStudentsAndIdentityCardTable,
};
