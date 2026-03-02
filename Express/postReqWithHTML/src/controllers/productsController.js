const path = require("path");

const getAllProduct = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "productForm.html"));
};

const postProduct = (req, res) => {
  // res.send("New Product Added.")
  const data = req.body;
  res.json({ value: data.productName });
};

module.exports = { getAllProduct, postProduct };
