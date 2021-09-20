const fs = require("fs");

// 同步读取，buffer
const data = fs.readFileSync("../.gitignore");

// 二进制以文本格式utf-8输出
// console.log(data.toString());

// promise style
(async () => {
  const fs = require("fs");
  const { promisify } = require("util");
  const readFile = promisify(fs.readFile);
  const data = await readFile("../.gitignore");
  console.log(data.toString());
})();
