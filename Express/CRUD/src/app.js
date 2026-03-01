const express = require("express");
const studentRouter = require("./routes/student");
const courseRouter = require("./routes/course");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the Student & Course Portal API!</h1>`);
});

app.use("/students", studentRouter);
app.use("/courses", courseRouter);

app.use((req, res) => {
  res.status(404);
  res.send(`<h1>Page not found!</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
