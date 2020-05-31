const fs = require("fs");

const incrementLike = (id) => {
  // read video file
  const video = JSON.parse(fs.readFileSync(`./src/models/videos/${id}.json`));
  // increment like
  let likes = parseInt(video.likes.split(",").join("")) + 1;
  video.likes = likes.toLocaleString();
  // write to file
  fs.writeFileSync(`./src/models/videos/${id}.json`, JSON.stringify(video));
  return video;
};

module.exports = incrementLike;
