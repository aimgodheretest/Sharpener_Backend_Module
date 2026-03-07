const express = require("express");
const router = express.Router();
const {
  addPlayer,
  searchPlayer,
  deletePlayer,
  updatePlayer,
} = require("../controllers/playerController");

router.post("/add", addPlayer);
router.get("/search/:name", searchPlayer);
router.put("/update/:id", updatePlayer);
router.delete("/delete/:id", deletePlayer);

module.exports = router;
