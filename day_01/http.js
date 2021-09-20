const http = require("http");
const fs = require("fs");
const { promisify } = require("util");

http
  .createServer(async (request, response) => {
    const { url, method } = request;

    if (url === "/" && method === "GET") {
      const readFile = promisify(fs.readFile);
      const data = await readFile("../README.md");

      if (!data) {
        response.statusCode = 500;
        response.end();
      }
      response.end(data);
      return;
    }

    response.writeHead(200, {
      "Content-Type": "text/explain",
    });
    response.statusCode = 404;
    response.end();
  })
  .listen(3000, () => {
    console.log("server at http://localhost:3000");
  });
