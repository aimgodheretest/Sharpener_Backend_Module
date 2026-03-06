const express = require("express");
const {
  addStudent,
  getAllStudent,
  getStudentByID,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");
const router = express.Router();

router.post("/students", addStudent);
router.get("/students", getAllStudent);
router.get("/students/:id", getStudentByID);
router.put("/students/:id", updateStudent);
router.delete("/students/:id", deleteStudent);

module.exports = router;
