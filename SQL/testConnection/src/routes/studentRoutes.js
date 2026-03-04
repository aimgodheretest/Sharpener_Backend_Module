const express = require("express");
const {
  addEntries,
  updateEntry,
  deleteEntry,
} = require("../controllers/studentController");

const router = express.Router();

router.post("/add", addEntries);
router.put("/update/:id", updateEntry);
router.delete("/delete/:id", deleteEntry);

module.exports = router;
