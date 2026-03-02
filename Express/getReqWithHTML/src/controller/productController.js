const path = require("path");

const getAllProducts = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "products.html"));
};

const getProductById = (req, res) => {
  const { id } = req.params;
  res.send(`Fetching product with ID: ${id}`);
};

const postProducts = (req, res) => {
  res.send("New product Added!");
};
module.exports = {
  getAllProducts,
  getProductById,
  postProducts,
};
