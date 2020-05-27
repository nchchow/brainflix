const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const videos = require(`../models/videos.json`);
  res.json(videos);
});

router.get("/:id", (req, res) => {
  const video = require(`../models/videos/${req.params.id}.json`);
  res.json(video);
});

module.exports = router;
