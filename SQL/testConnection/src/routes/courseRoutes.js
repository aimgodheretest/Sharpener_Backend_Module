const express = require("express");
const {
  addCourse,
  addStudentsToCourses,
} = require("../controllers/coursesController");

const router = express.Router();

router.post("/addcourses", addCourse);
router.get("/addStudentCourses", addStudentsToCourses);

module.exports = router;
