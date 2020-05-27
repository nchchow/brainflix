const fs = require("fs");

const deleteComment = (videoId, commentId) => {
  const path = `./src/models/videos/${videoId}.json`;
  // readfile
  fs.readFile(path, "utf8", (err, data) => {
    if (err) throw err;
    // get video data
    const video = JSON.parse(data);
    // find index of matching comment id and remove
    const indexToDel = video.comments.findIndex(
      (comment) => comment.id === commentId
    );
    indexToDel && video.comments.splice(indexToDel, 1);
    fs.writeFile(path, JSON.stringify(video), (err) => {
      if (err) throw err;
    });
  });
};

module.exports = deleteComment;
