const fs = require("fs");
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 12);

const postVideo = (video) => {
  // set video defaults
  video.id = nanoid();
  video.views = 0;
  video.likes = 0;
  video.timestamp = Date.now();
  video.comments = [];

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
  fs.readFile("./src/models/videos.json", (err, data) => {
    if (err) throw err;
    const videos = JSON.parse(data);
    videos.push({
      id: id,
      title: title,
      channel: channel,
      image: image,
    });
    fs.writeFile("./src/models/videos.json", JSON.stringify(videos), (err) => {
      if (err) throw err;
    });
  });
};

module.exports = postVideo;
