const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathname = req.url;
  if (pathname === "/home" || pathname === "/home") {
    res.end("This is the home page");
  } else if (pathname === "/product") {
    res.end("This is the product page");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
