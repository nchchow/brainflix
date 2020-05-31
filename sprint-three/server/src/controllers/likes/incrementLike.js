const fs = require("fs");

const incrementLike = (id) => {
  // read video file
  const video = JSON.parse(fs.readFileSync(`./src/models/videos/${id}.json`));
  // increment like
  video.likes++;
  // write to file
  fs.writeFileSync(`./src/models/videos/${id}.json`, JSON.stringify(video));
  return video;
};

module.exports = incrementLike;
