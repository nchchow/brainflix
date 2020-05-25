import React from "react";
import NewComment from "./NewComment";
import CommentsHeaderTitle from "./CommentsHeaderTitle";

const CommentsHeader = ({ mainVideo, populateHandler }) => (
  <header className="comments__header">
    <CommentsHeaderTitle commentsCount={mainVideo.comments.length} />
    <NewComment videoId={mainVideo.id} populateHandler={populateHandler} />
  </header>
);

export default CommentsHeader;
