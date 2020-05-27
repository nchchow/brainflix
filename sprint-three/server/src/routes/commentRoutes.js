const express = require("express");
const router = express.Router();

const postComment = require("../controllers/comments/postComment");
const deleteComment = require("../controllers/comments/deleteComment");

router.post("/:videoId/comments", (req, res) => {
  res.send(postComment(req.params.videoId, req.body));
});

router.delete("/:videoId/comments/:commentId", (req, res) => {
  res.send(deleteComment(req.params.videoId, req.params.commentId));
});

module.exports = router;
