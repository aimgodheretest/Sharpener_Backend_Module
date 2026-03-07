const express = require("express");
const cors = require("cors");

const sequelize = require("./utils/dbConnection");
const expenseRouter = require("./routes/expenseRoutes");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/expense", expenseRouter);

app.get("/", (req, res) => {
  res.send(`<h1>Track Your Expenses Here...</h1>`);
});

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is Running on port:http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
