const express = require("express");
const router = express.Router();

const postVideo = require("../controllers/postVideo");

router.get("/", (req, res) => {
  const videos = require(`../models/videos.json`);
  res.json(videos);
});

router.get("/:id", (req, res) => {
  const video = require(`../models/videos/${req.params.id}.json`);
  res.json(video);
});

router.post("/", (req, res) => {
  postVideo(req.body);
  res.send("posted");
});

module.exports = router;
