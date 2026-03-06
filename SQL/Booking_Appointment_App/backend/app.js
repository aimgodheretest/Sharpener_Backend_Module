const express = require("express");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Booking Appointment App!");
});

app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port:http://localhost:${port}`);
});
