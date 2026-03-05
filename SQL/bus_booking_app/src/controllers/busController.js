const db = require("../utils/db-connection");

//ADD BUSES
const addBuses = (req, res) => {
  const { busNumber, totalSeats, availableSeats } = req.body;

  const addQuary = `INSERT INTO buses (busNumber,totalSeats,availableSeats) VALUES (?,?,?)`;

  db.execute(
    addQuary,
    [busNumber, totalSeats, availableSeats],
    (err, result) => {
      if (err) {
        console.log(err.message);
        res.status(500).send(err.message);
        db.end();
        return;
      }

      res.status(201).send("Buses Added Successfully...");
    },
  );
};
//GET BUSES
const getAvailableBuses = (req, res) => {
  const { seats } = req.params;
  const getAvailableQuary = `SELECT * FROM buses WHERE availableSeats > ?`;

  db.execute(getAvailableQuary, [seats], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }

    res.status(200).json(result);
  });
};

module.exports = { addBuses, getAvailableBuses };
