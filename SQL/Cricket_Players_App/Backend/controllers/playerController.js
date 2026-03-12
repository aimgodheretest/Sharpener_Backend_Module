const Player = require("../models/playersTable");

const addPlayer = async (req, res) => {
  try {
    const {
      name,
      dob,
      photoUrl,
      birthplace,
      career,
      matches,
      score,
      fifties,
      centuries,
      wickets,
      average,
    } = req.body;

    const player = await Player.create({
      name,
      dob,
      photoUrl,
      birthplace,
      career,
      matches,
      score,
      fifties,
      centuries,
      wickets,
      average,
    });

    res.json(player);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchPlayer = async (req, res) => {
  try {
    const { name } = req.params;

    const player = await Player.findOne({
      where: { name },
    });

    res.json(player);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updatePlayer = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      dob,
      photoUrl,
      birthplace,
      career,
      matches,
      score,
      fifties,
      centuries,
      wickets,
      average,
    } = req.body;

    await Player.update(
      {
        name,
        dob,
        photoUrl,
        birthplace,
        career,
        matches,
        score,
        fifties,
        centuries,
        wickets,
        average,
      },
      {
        where: { id },
      },
    );

    const updatedPlayer = await Player.findByPk(id);

    res.send(updatedPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params;

    await Player.destroy({
      where: { id },
    });
    
    res.send("Player Deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addPlayer, searchPlayer, updatePlayer, deletePlayer };
