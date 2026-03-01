const express = require("express");
const cartController = require("../controllers/cartController");
const router = express.Router();

router.get("/:userId", cartController.getCartForUser);
router.post("/:userId", cartController.addProductToCart);

module.exports = router;
