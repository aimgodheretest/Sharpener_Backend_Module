const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`
            <h1>This is Home Page!</h1>
            <h1>This is also home page and here nodemon is watching the changes.</h1>
            `);
  }
});

server.listen(3000, () => {
  console.log("Server is running on port:3000");
});
