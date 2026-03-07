const express = require("express");
const router = express.Router();

const {
  createBooking,
  getUserBookings,
  getBusBookings,
} = require("../controllers/bookingController");

router.post("/bookings", createBooking);
router.get("/users/:id/bookings", getUserBookings);
router.get("/buses/:id/bookings", getBusBookings);

module.exports = router;
