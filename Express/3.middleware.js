const express = require("express");

const app = express();
let port = 3000;

const addUserMiddleware = (req, res, next) => {
  req.user = "Guest";
  next();
};

app.get("/welcome", addUserMiddleware, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
