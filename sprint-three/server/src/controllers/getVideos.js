const fs = require("fs");

const getVideos = () => {
  fs.readFile("./models/videos.json", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
    return data;
  });
};

module.exports = getVideos;
