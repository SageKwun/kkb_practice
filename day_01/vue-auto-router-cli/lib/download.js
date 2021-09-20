const { promisify } = require("util");

module.exports.clone = async function (repo, desc) {
  // TODO: 进度条
  const download = promisify(require("download-git-repo"));
  await download(repo, desc);
};
