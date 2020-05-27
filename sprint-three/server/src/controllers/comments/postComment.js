const fs = require("fs");
const { uuid } = require("uuidv4");

const postComment = (videoId, comment) => {
  let status = 200;
  const path = `./src/models/videos/${videoId}.json`;
  // readfile
  fs.readFile(path, "utf8", (err, data) => {
    if (err) status = 404;
    // make a copy in memory
    const video = JSON.parse(data);
    // create default data for comment
    comment.id = uuid();
    comment.likes = 0;
    comment.timestamp = Date.now();
    // push comment
    video.comments.push(comment);
    // writefile
    fs.writeFile(path, JSON.stringify(video), (err) => {
      if (err) status = 404;
    });
  });
  return status;
};

module.exports = postComment;
