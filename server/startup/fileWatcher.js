const chokidar = require("chokidar");
const path = require("path");
const dirTree = require("directory-tree");
const config = require("config");

const fileDirectory =
  config.get("directoryPath") || "/mnt/d/Videos/transferred/";

const watcher = chokidar.watch("file, dir, glob, or array", {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
});

const getTree = () => {
  return dirTree(fileDirectory);
};

module.exports = getTree;
