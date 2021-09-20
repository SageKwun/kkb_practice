// 打印欢迎界面
const { promisify } = require("util");
const figlet = promisify(require("figlet"));
const clear = require("clear");
const chalk = require("chalk");
const { clone } = require("./download");
const open = require("open");
const log = (content) => console.log(chalk.green(content));

// 子进程
const spawn = async (...args) => {
  const { spawn } = require("child_process");
  return new Promise((resolve) => {
    const proc = spawn(...args);
    // 把子进程的流合并到主进程
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on("close", () => {
      resolve();
    });
  });
};

module.exports = async (name) => {
  // 打印欢迎界面
  clear();
  const data = await figlet("welcome");
  log(data);

  // 项目模板
  log("creating ", name);
  await clone("github:su37josephxia/vue-template", name);

  // 下载依赖
  // 子进程
  log("install dependencies...");

  await spawn(process.platform === "win32" ? "npm.cmd" : "npm", ["install"], {
    cwd: `./${name}`,
  });
  await spawn(
    process.platform === "win32" ? "npm.cmd" : "npm",
    ["run", "serve"],
    {
      cwd: `./${name}`,
    }
  );
  open("http://localhost:8080");
};
