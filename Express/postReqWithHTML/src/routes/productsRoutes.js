const express = require("express");
const productsController = require("../controllers/productsController");

const router = express.Router();

router.get("/", productsController.getAllProduct);
router.post("/", productsController.postProduct);

module.exports = router;
