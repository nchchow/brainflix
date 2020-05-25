import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments, videoId, populateHandler }) => (
  <section className="comments__list">
    <hr className="comment__divider" />
    {comments
      .sort((a, b) => b.timestamp - a.timestamp)
      .map((comment) => (
        <Comment
          key={comment.id}
          commentProp={comment}
          videoId={videoId}
          populateHandler={populateHandler}
        />
      ))}
  </section>
);

export default CommentsList;
