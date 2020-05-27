const fs = require("fs");
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 12);

const postVideo = (video) => {
  // set video defaults
  setDefaults(video);
  try {
    // write a new file with all data
    createJson(video);
    // write to videos file with selected data
    addToJson(video);
  } catch (err) {
    console.log(err);
  }
  return video;
};

const setDefaults = (video) => {
  video.id = nanoid();
  video.views = 0;
  video.likes = 0;
  video.timestamp = Date.now();
  video.comments = [];
};

const createJson = (video) => {
  fs.writeFile(
    `./src/models/videos/${video.id}.json`,
    JSON.stringify(video),
    (err) => {
      if (err) throw err;
    }
  );
};

const addToJson = ({ id, title, channel, image }) => {
  const path = "./src/models/videos.json";
  fs.readFile(path, (err, data) => {
    if (err) throw err;
    // make new copy
    const videos = JSON.parse(data);
    // add info
    videos.push({
      id: id,
      title: title,
      channel: channel,
      image: image,
    });
    // write to file
    fs.writeFile(path, JSON.stringify(videos), (err) => {
      if (err) throw err;
    });
  });
};

module.exports = postVideo;
