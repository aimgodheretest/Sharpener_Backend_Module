const express = require("express");
const productRoutes = require("../src/routes/productRoutes");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Home Page!.</h1>");
});

app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port:http://localhost:${port}`);
});
