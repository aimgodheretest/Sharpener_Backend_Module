const express = require("express");
const db = require("./utils/db-connection");
const studentRoutes = require("./routes/studentRoutes");
//models
const studentsModel = require("./models/studentsTable");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Students Portal</h1>");
});

app.use("/students", studentRoutes);

db.sync({ force: false })
  .then(() => {
    app.listen(3000, (err) => {
      console.log("Server is running on port:3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
