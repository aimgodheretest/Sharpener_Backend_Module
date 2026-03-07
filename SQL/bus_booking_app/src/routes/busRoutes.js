const express = require("express");
const { addBuses, getAvailableBuses } = require("../controllers/busController");

const router = express.Router();

router.post("/buses", addBuses);
router.get("/buses/available/:seats", getAvailableBuses);

module.exports = router;
