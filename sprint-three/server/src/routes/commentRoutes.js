const express = require("express");
const router = express.Router();

const postComment = require("../controllers/comments/postComment");
const deleteComment = require("../controllers/comments/deleteComment");

router.post("/:videoId/comments", (req, res) => {
  try {
    postComment(req.params.videoId, req.body);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(404);
  }
});

router.delete("/:videoId/comments/:commentId", (req, res) => {
  try {
    deleteComment(req.params.videoId, req.params.commentId);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(404);
  }
});

module.exports = router;
