const express = require("express");

const app = express();
let port = 4000;

// Logging Middleware:
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

// GET /products - Respond with "Here is the list of all products."
app.get("/products", (req, res) => {
  res.send("Here is the list of all products.");
});

// POST /products - Respond with "A new product has been added."
app.post("/products", (req, res) => {
  res.send("A new product has been added.");
});

// GET /categories - Respond with "Here is the list of all categories."
app.get("/categories", (req, res) => {
  res.send("Here is the list of all categories.");
});

// POST /categories - Respond with "A new category has been created."
app.post("/categories", (req, res) => {
  res.send("A new category has been created.");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
