const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Output from middleware:1");
  next();
});

app.use((req, res, next) => {
  console.log("Output from middleware:2");
  res.send("<h1>This is Home Page of Express Learning Day:1</h1>");
});

app.listen(3000);
