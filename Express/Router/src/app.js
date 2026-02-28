const express = require("express");
const orderRouter = require("./routes/orders.js");
const userRouter = require("./routes/users.js");

const app = express();
const port = 3000;

app.use("/orders", orderRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
