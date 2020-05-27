const express = require("express");
const app = express();
const cors = require("cors");

const postComment = require("./src/controllers/postComment");
const deleteComment = require("./src/controllers/deleteComment");

// middleware
app.use(express.json());
app.use(cors());

const PORT = 8080;
const MODELS_PATH = `${__dirname}/src/models`;

app.get("/videos", (req, res) => {
  res.sendFile(`${MODELS_PATH}/videos.json`, (err) => {
    if (err) res.sendStatus(404);
  });
});

app.get("/videos/:id", (req, res) => {
  res.sendFile(`${MODELS_PATH}/videos/${req.params.id}.json`, (err) => {
    if (err) res.sendStatus(404);
  });
});

app.post("/videos/:id/comments", (req, res) => {
  const status = postComment(req.params.id, req.body);
  res.sendStatus(status);
});

app.delete("/videos/:videoId/comments/:commentId", (req, res) => {
  const status = deleteComment(req.params.videoId, req.params.commentId);
  res.sendStatus(status);
});

app.get("/*", (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Server is listening on: ${PORT}`);
});
