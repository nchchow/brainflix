import React from "react";
import CommentsHeader from "./CommentsHeader";
import CommentsList from "./CommentsList";

const CommentsSection = ({ comments, id, handler }) => (
  <section className="comments container">
    <CommentsHeader commentsCount={comments.length} id={id} handler={handler} />
    <CommentsList comments={comments} />
  </section>
);

export default CommentsSection;
