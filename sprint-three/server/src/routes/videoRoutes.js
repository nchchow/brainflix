const express = require("express");
const router = express.Router();

const getVideos = require("../controllers/videos/getVideos");
const postVideo = require("../controllers/videos/postVideo");
const incrementLike = require("../controllers/likes/incrementLike");

router.get("/", (req, res) => {
  res.send(getVideos());
});

router.get("/:id", (req, res) => {
  res.send(getVideos(req.params.id));
});

router.post("/", (req, res) => {
  res.send(postVideo(req.body));
});

router.put("/:id/likes", (req, res) => {
  res.send(incrementLike(req.params.id));
});

module.exports = router;
