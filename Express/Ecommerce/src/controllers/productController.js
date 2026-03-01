const getProducts = (req, res) => {
  res.send("Fetching all products");
};

const getProductsById = (req, res) => {
  const id = req.params.id;
  res.send(`Fetching product with ID:${id}`);
};

const postProduct = (req, res) => {
  res.send("Adding a new product");
};

module.exports = {
  getProducts,
  getProductsById,
  postProduct,
};
