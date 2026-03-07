const express = require("express");
const {
  addEntries,
  updateEntry,
  deleteEntry,
  addvaluesToStudentsAndIdentityCardTable,
} = require("../controllers/studentController");

const router = express.Router();

router.post("/add", addEntries);
router.put("/update/:id", updateEntry);
router.delete("/delete/:id", deleteEntry);

router.post("/addingStudentWithCard", addvaluesToStudentsAndIdentityCardTable);

module.exports = router;
