const express = require("express");
const cors = require("cors");

const sequelize = require("./utils/dbConnection");
const playerRouter = require("./routes/playerRoutes");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// app.use("/", (req, res) => {
//   res.send(`<h1>Welcome to Players Dashboard...</h1>`);
// });
app.use("/player", playerRouter);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port:http://localhost:${port}`);
  });
});
