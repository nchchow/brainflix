const fs = require("fs");

const deleteComment = (videoId, commentId) => {
  // object to return
  let deleted = null;
  const path = `./src/models/videos/${videoId}.json`;
  // readfile
  const data = fs.readFileSync(path, "utf8");
  // get video data
  const video = JSON.parse(data);
  // find index of matching comment id and remove
  const indexToDel = video.comments.findIndex(
    (comment) => comment.id === commentId
  );
  deleted = comments[indexToDel];
  indexToDel && video.comments.splice(indexToDel, 1);
  fs.writeFileSync(path, JSON.stringify(video));
  return deleted || "not found";
};

module.exports = deleteComment;
