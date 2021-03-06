const fs = require("fs");

const deleteComment = (videoId, commentId) => {
  try {
    let deleted = null;
    const path = `./src/models/videos/${videoId}.json`;
    // readfile
    const data = fs.readFileSync(path, "utf8");
    const video = JSON.parse(data);
    // find index of matching comment id and remove
    const indexToDel = video.comments.findIndex(
      (comment) => comment.id === commentId
    );
    deleted = video.comments[indexToDel];
    indexToDel && video.comments.splice(indexToDel, 1);
    // rewrite to json
    fs.writeFileSync(path, JSON.stringify(video));
    // return deleted comment
    return deleted;
  } catch {
    return "Cannot delete";
  }
};

module.exports = deleteComment;
