import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => (
  <section className="comments__list">
    <hr className="comment__divider" />
    {comments
      .sort((a, b) => b.timestamp - a.timestamp)
      .map((comment) => (
        <Comment
          key={comment.id}
          username={comment.name}
          timestamp={comment.timestamp}
          comment={comment.comment}
        />
      ))}
  </section>
);

export default CommentsList;
