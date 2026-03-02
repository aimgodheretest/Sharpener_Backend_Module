const express = require("express");
const productRoute = require("./routes/productRoute");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});
app.use("/api/products", productRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
