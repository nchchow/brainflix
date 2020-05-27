const fs = require("fs");
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 12);

const postVideo = (video) => {
  let status = 200;

  // set video defaults
  video.id = nanoid();
  video.views = 0;
  video.likes = 0;
  video.timestamp = Date.now();
  video.comments = [];

  // write a new file with all data
  status = createJson(video);
  // write to videos file with selected data
  status = addToJson(video);

  return status;
};

const createJson = (video) => {
  fs.writeFile(
    `./src/models/videos/${video.id}.json`,
    JSON.stringify(video),
    (err) => {
      if (err) return 404;
      return 200;
    }
  );
};

const addToJson = ({ id, title, channel, image }) => {
  const data = fs.readFileSync("./src/models/videos.json");
  const videos = JSON.parse(data);
  videos.push({
    id: id,
    title: title,
    channel: channel,
    image: image,
  });
  fs.writeFile("./src/models/videos.json", JSON.stringify(videos), (err) => {
    if (err) return 404;
    return 200;
  });
};

module.exports = postVideo;
