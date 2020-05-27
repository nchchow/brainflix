const fs = require("fs");
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 12);

const postVideo = (video) => {
  let status = 200;
  console.log(typeof video);
  // const video = JSON.parse(videoJson);
  // set video defaults
  video.id = nanoid();
  video.views = 0;
  video.likes = 0;
  video.timestamp = Date.now();

  console.log(video);
  // write a new file with all data
  fs.writeFile(
    `./src/models/videos/${video.id}.json`,
    JSON.stringify(video),
    (err) => {
      if (err) throw err;
      console.log("saved: " + video.id);
    }
  );
  // write to videos file with selected data

  return status;
};

module.exports = postVideo;
