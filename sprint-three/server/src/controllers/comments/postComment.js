const fs = require("fs");
const { uuid } = require("uuidv4");

const postComment = (videoId, comment) => {
  try {
    const path = `./src/models/videos/${videoId}.json`;
    // readfile
    const data = fs.readFileSync(path, "utf8");
    // make a copy in memory
    const video = JSON.parse(data);
    // create default data for comment
    setDefaults(comment);
    // push comment
    video.comments.push(comment);
    // writefile
    fs.writeFileSync(path, JSON.stringify(video));
    return comment;
  } catch {
    return { message: "not found" };
  }
};

const setDefaults = (comment) => {
  comment.id = uuid();
  comment.likes = 0;
  comment.timestamp = Date.now();
};

module.exports = postComment;
