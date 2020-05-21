import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments, videoId, handler }) => (
  <section className="comments__list">
    <hr className="comment__divider" />
    {comments
      .sort((a, b) => b.timestamp - a.timestamp)
      .map((comment) => (
        <Comment
          key={comment.id}
          commentProp={comment}
          videoId={videoId}
          handler={handler}
        />
      ))}
  </section>
);

export default CommentsList;
