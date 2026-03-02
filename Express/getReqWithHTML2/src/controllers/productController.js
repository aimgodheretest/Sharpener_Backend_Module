const path = require("path");

const getAllProduct = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "productForm.html"));
};

module.exports = { getAllProduct };
