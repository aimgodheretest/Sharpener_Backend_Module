const express = require("express");

const app = express();
const port = 3000;

app.get("/welcome/:username", (req, res) => {
  const username = req.params.username;
  const role = req.query.role;

  const userRole = role ? role : "User";
  res.send(`Welcome ${username},your role is ${userRole}`);
});
app.listen(port, () => {
  console.log(`Server is runnnig on http://localhost:${port}`);
});
