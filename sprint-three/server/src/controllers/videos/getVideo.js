const fs = require("fs");

const getVideos = () => {
  return (
    fs.readFileSync(`./src/models/videos.json`, "utf8") || {
      message: "Videos not found",
    }
  );
};

const getVideo = (id) => {
  return (
    fs.readFileSync(`./src/models/videos/${id}.json`, "utf8") || {
      message: "No video with that id exists",
    }
  );
};

module.exports = { getVideos, getVideo };
