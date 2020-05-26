const fs = require("fs");
const express = require("express");
const app = express();
const PORT = 8080;

app.get("/videos?:api_key", (req, res) => {
  fs.readFile("./data/videos.json", "utf8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

app.get("/videos/:id", (req, res) => {
  fs.readFile(`./data/videos/${req.params.id}.json`, "utf8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on: ${PORT}`);
});
