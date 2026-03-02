const express = require("express");
const path = require("path");
const productsRoutes = require("./routes/productsRoutes");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/api/products", productsRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
