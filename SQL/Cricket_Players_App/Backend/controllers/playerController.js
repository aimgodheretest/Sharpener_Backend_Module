const Player = require("../models/playersTable");

const addPlayer = async (req, res) => {
  const player = await Player.create(req.body);

  res.json(player);
};

const searchPlayer = async (req, res) => {
  const player = await Player.findOne({
    where: { name: req.params.name },
  });

  res.json(player);
};

const updatePlayer = async (req, res) => {
  const id = req.params.id;

  await Player.update(req.body, {
    where: { id },
  });

  const updatedPlayer = await Player.findByPk(id);

  res.send(updatedPlayer);
};

const deletePlayer = async (req, res) => {
  await Player.destroy({
    where: { id: req.params.id },
  });

  res.send("Player Deleted");
};

module.exports = { addPlayer, searchPlayer, updatePlayer, deletePlayer };
