#!/usr/bin/env node
console.log("start cli ...");

const program = require("commander");
// 策略模式
program.version(require("../package").version);
program
  .command("init <name>")
  .description("init project")
  //   .action((name) => {
  //     console.log("init" + name);
  //   });
  .action(require("../bin/init"));
program.parse(process.argv);
