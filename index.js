const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathname = req.url;
  if (pathname === "/api" || pathname === "/api/home") {
    fs.readFile(`${__dirname}/data/data.json`, "utf-8", (err, data) => {
      const productData = JSON.parse(data);
      console.log({ productData });
      res.writeHead(200, {
        "Content-type": "application/json",
      });
      res.end(data);
    });
  } else if (pathname === "api/product") {
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
