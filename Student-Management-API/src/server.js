const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Student Management API</h1>`);
});

app.use(studentRoutes);

app.listen(port, (err) => {
  console.log(`Server is Running on http://localhost:${port}`);
});
