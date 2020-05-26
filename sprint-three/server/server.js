const fs = require("fs");
const express = require("express");
const app = express();
const PORT = 8080;

app.get("/videos", (req, res) => {
  fs.readFile("./src/models/videos.json", "utf8", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/videos/:id", (req, res) => {
  fs.readFile(
    `./src/models/videos/${req.params.id}.json`,
    "utf8",
    (err, data) => {
      if (err) throw err;
      res.send(data);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is listening on: ${PORT}`);
});
