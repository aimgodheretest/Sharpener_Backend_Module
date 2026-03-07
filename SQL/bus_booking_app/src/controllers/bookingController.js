const Bookings = require("../models/bookingsModel");
const Buses = require("../models/busModel");
const Users = require("../models/userModel");

const createBooking = async (req, res) => {
  try {
    const { userId, busId, seatNumber } = req.body;

    const booking = await Bookings.create({
      userId,
      busId,
      seatNumber,
    });

    res.status(201).json({
      message: "Booking created successfully",
      booking,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating booking");
  }
};

const getUserBookings = async (req, res) => {
  try {
    const { id } = req.params;

    const bookings = await Bookings.findAll({
      where: { userId: id },
      include: [
        {
          model: Buses,
          attributes: ["busNumber"],
        },
      ],
    });

    res.status(200).json(bookings);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching bookings");
  }
};

const getBusBookings = async (req, res) => {
  try {
    const { id } = req.params;

    const bookings = await Bookings.findAll({
      where: { busId: id },
      include: [
        {
          model: Users,
          attributes: ["name", "email"],
        },
      ],
    });

    res.status(200).json(bookings);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching bus bookings");
  }
};

module.exports = { createBooking, getUserBookings, getBusBookings };
