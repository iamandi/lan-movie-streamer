const chokidar = require("chokidar");
const path = require("path");
const dirTree = require("directory-tree");

const dir = path.join(__dirname, "../../../../../../mnt/d/Videos/transferred/");

const watcher = chokidar.watch("file, dir, glob, or array", {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
});

const getTree = () => {
  return dirTree(dir);
};

module.exports = getTree;
