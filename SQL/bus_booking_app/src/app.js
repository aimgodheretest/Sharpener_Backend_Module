const express = require("express");
const mysql = require("mysql2");
const userRouter = require("./routes/userRoutes");
const busRouter = require("./routes/busRoutes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Bus Booking App Running!</h1>");
});

app.use("/users", userRouter);
app.use("/buses", busRouter);
app.listen(3000, (err) => {
  console.log("Server is running on port:3000");
});
