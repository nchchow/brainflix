const fs = require("fs");

const getVideos = () => {
  return fs.readFileSync(`./src/models/videos.json`, "utf8") || 404;
};

const getVideo = (id) => {
  return fs.readFileSync(`./src/models/videos/${id}.json`, "utf8") || 404;
};

module.exports = { getVideos, getVideo };
