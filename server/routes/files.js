const express = require("express");
const router = express.Router();
const getTree = require("../startup/fileWatcher");

router.get("/", (req, res) => {
  res.send(getTree());
});

module.exports = router;
