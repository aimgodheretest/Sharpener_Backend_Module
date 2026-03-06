const express = require("express");
const {
  addUsers,
  getAllusers,
  deleteUsers,
} = require("../controllers/userController");
const router = express.Router();

router.post("/users/add", addUsers);
router.get("/users", getAllusers);
router.delete("/users/delete/:id", deleteUsers);

module.exports = router;
