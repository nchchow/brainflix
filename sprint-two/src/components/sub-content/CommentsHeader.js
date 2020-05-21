import React from "react";
import NewComment from "./NewComment";
import CommentsHeaderTitle from "./CommentsHeaderTitle";

const CommentsHeader = ({ mainVideo, handler }) => (
  <header className="comments__header">
    <CommentsHeaderTitle commentsCount={mainVideo.comments.length} />
    <NewComment id={mainVideo.id} handler={handler} />
  </header>
);

export default CommentsHeader;
