const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return
  }

  if (req.url === "/about") {
    res.end("Welcome to our about page");
    return
  }
  res.end(`
      <h1>Opps!</h1>
      <p>Wen cant seem to find the page you are lokkinf for</p>
      <a href="/">back to home</a>
  `);
  // console.log(req.rawHeaders);
});

server.listen(5000);
