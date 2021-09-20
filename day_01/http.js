const http = require("http");
const fs = require("fs");
const { promisify } = require("util");

http
  .createServer(async (request, response) => {
    const { url, method, headers } = request;

    if (url === "/" && method === "GET") {
      const readFile = promisify(fs.readFile);
      const data = await readFile("../README.md");

      if (!data) {
        response.statusCode = 500;
        response.end();
      }
      response.writeHead(200, {
        "Content-Type": "text/plain;charset=utf-8",
      });
      response.end(data);
      return;
    } else if (url === "api/users" && method === "GET") {
      // json
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ name: "gsx" }));
    } else if (method === "GET" && headers.accept.includes("image/*")) {
      // 图片请求总的接口
      // stream 流
      fs.createReadStream("." + url).pipe(response);
    }

    response.statusCode = 404;
    response.end();
  })
  .listen(3000, () => {
    console.log("server at http://localhost:3000");
  });
