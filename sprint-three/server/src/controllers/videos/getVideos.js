const fs = require("fs");

const getVideos = (id) => {
  return (
    fs.readFileSync(path(id), "utf8") || {
      message: "Not found",
    }
  );
};

const path = (id) => {
  let param = id ? `/${id}` : "";
  return `./src/models/videos${param}.json`;
};

module.exports = getVideos;
