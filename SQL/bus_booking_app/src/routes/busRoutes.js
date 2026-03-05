const express = require("express");
const { addBuses, getAvailableBuses } = require("../controllers/busController");

const router = express.Router();

router.post("/", addBuses);
router.get("/available/:seats", getAvailableBuses);

module.exports = router;
