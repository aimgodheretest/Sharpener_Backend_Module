const express = require("express");
const bookRouter = require("../routes/books.js");

const app = express();
const port = 3000;

app.use("/books", bookRouter);

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
