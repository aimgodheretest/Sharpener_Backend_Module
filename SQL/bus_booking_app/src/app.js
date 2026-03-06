const express = require("express");
const userRouter = require("./routes/userRoutes");
const busRouter = require("./routes/busRoutes");
const db = require("./utils/db-connection");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Bus Booking App Running!</h1>");
});

app.use("/users", userRouter);
app.use("/buses", busRouter);

db.sync({ force: false })
  .then(() => {
    app.listen(3000, (err) => {
      console.log("Server is running on port:3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
