const express = require("express");
const productController = require("../controller/productController");

const { getAllProducts, getProductById, postProducts } = productController;
const router = express.Router();

router.get("/", getAllProducts);
router.post("/", postProducts);
router.get("/", getProductById);


module.exports = router;
