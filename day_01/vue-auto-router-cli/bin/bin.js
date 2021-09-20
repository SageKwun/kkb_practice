#!/usr/bin/env node

const program = require("commander");
// 策略模式
program.version(require("../package").version);

// 注册init命令
program
  .command("init <name>") // 命令
  .description("init project") // 描述
  .action(require("../lib/init")); // 行为，name会作为参数传入

// 注册refresh命令
program
  .command("refresh") // 命令
  .description("init project") // 描述
  .action(require("../lib/refresh"));

// 解析命令行参数
program.parse(process.argv);
