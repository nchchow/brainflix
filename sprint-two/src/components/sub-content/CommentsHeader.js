import React from "react";
import NewComment from "./NewComment";
import CommentsHeaderTitle from "./CommentsHeaderTitle";

const CommentsHeader = ({ commentsCount, id, handler }) => (
  <header className="comments__header">
    <CommentsHeaderTitle commentsCount={commentsCount} />
    <NewComment id={id} handler={handler} />
  </header>
);

export default CommentsHeader;
