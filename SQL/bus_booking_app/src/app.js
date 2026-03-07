const express = require("express");
const userRouter = require("./routes/userRoutes");
const busRouter = require("./routes/busRoutes");
const bookingRouter = require("./routes/bookingRoutes");
const db = require("./utils/db-connection");

require("./models/association");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Bus Booking App Running!</h1>");
});

app.use(userRouter);
app.use(busRouter);
app.use(bookingRouter);

db.sync({ force: true })
  .then(() => {
    app.listen(3000, (err) => {
      console.log("Server is running on port:3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
