const db = require("../utils/db-connection");
const Buses = require("../models/busModel");
const { Op } = require("sequelize");
//ADD BUSES
const addBuses = async (req, res) => {
  try {
    const { busNumber, totalSeats, availableSeats } = req.body;
    const buses = await Buses.create({
      busNumber: busNumber,
      totalSeats: totalSeats,
      availableSeats: availableSeats,
    });

    res.status(201).json(buses);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }

  // const addQuary = `INSERT INTO buses (busNumber,totalSeats,availableSeats) VALUES (?,?,?)`;

  // db.execute(
  //   addQuary,
  //   [busNumber, totalSeats, availableSeats],
  //   (err, result) => {
  //     if (err) {
  //       console.log(err.message);
  //       res.status(500).send(err.message);
  //       db.end();
  //       return;
  //     }

  //     res.status(201).send("Buses Added Successfully...");
  //   },
  // );
};
//GET BUSES
const getAvailableBuses = async (req, res) => {
  try {
    const { seats } = req.params;
    const buses = await Buses.findAll({
      where: {
        availableSeats: {
          [Op.gt]: seats,
        },
      },
    });

    res.status(200).json(buses);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
  // const getAvailableQuary = `SELECT * FROM buses WHERE availableSeats > ?`;

  // db.execute(getAvailableQuary, [seats], (err, result) => {
  //   if (err) {
  //     console.log(err.message);
  //     res.status(500).send(err.message);
  //     return;
  //   }

  //   res.status(200).json(result);
  // });
};

module.exports = { addBuses, getAvailableBuses };
