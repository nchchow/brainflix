const fs = require("fs");
const { uuid } = require("uuidv4");

const postComment = (videoId, comment) => {
  const path = `./src/models/videos/${videoId}.json`;
  // readfile
  const data = fs.readFileSync(path, "utf8");
  // make a copy in memory
  const video = JSON.parse(data);
  // create default data for comment
  comment.id = uuid();
  comment.likes = 0;
  comment.timestamp = Date.now();
  // push comment
  video.comments.push(comment);
  // writefile
  fs.writeFileSync(path, JSON.stringify(video));
  return comment || "not found";
};

module.exports = postComment;
