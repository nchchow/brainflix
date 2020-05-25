import React from "react";
import UserIcon from "../icons/UserIcon";
import NewCommentForm from "./NewCommentForm";

const NewComment = ({ videoId, populateHandler }) => {
  return (
    <article className="new-comment">
      <UserIcon className="new-comment__user-icon" />
      <NewCommentForm videoId={videoId} populateHandler={populateHandler} />
    </article>
  );
};

export default NewComment;
