const fs = require("fs");

const deleteComment = (videoId, commentId) => {
  let status = 200;
  const path = `./src/models/videos/${videoId}.json`;
  // readfile
  fs.readFile(path, "utf8", (err, data) => {
    if (err) status = 404;
    // get video data
    const video = JSON.parse(data);
    // find index of matching comment id and remove
    const indexToDel = video.comments.findIndex(
      (comment) => comment.id === commentId
    );
    indexToDel && video.comments.splice(indexToDel, 1);
    fs.writeFile(path, JSON.stringify(video), (err) => {
      if (err) status = 404;
    });
  });
  return status;
};

module.exports = deleteComment;
