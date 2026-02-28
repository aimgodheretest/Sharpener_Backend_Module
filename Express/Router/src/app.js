const express = require("express");

const app = express();
const port = 3000;

app.get("/orders", (req, res) => {
  res.send("Order List!");
});

app.post("/orders", (req, res) => {
  res.send("Order Created!");
});

app.get("/users", (req, res) => {
  res.send("User List");
});

app.post("/users", (req, res) => {
  res.send("User Created!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
