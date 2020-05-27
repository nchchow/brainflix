const express = require("express");
const router = express.Router();

const { getVideos } = require("../controllers/videos/getVideo");
const postVideo = require("../controllers/videos/postVideo");

router.get("/", (req, res) => {
  res.send(getVideos());
});

router.get("/:id", (req, res) => {
  res.send(getVideos(req.params.id));
});

router.post("/", (req, res) => {
  res.send(postVideo(req.body));
});

module.exports = router;
