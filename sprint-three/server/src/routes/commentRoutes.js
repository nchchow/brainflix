const express = require("express");
const router = express.Router();

const postComment = require("../controllers/postComment");
const deleteComment = require("../controllers/deleteComment");

router.post("/:videoId/comments", (req, res) => {
  const status = postComment(req.params.videoId, req.body);
  res.sendStatus(status);
});

router.delete("/:videoId/comments/:commentId", (req, res) => {
  const status = deleteComment(req.params.videoId, req.params.commentId);
  res.sendStatus(status);
});

module.exports = router;
