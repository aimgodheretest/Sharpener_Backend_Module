const express = require("express");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const cartRouter = require("./routes/cartRoutes");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Ecommerce Website!</h1>`);
});
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
