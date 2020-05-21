import React from "react";
import UserIcon from "../icons/UserIcon";
import NewCommentForm from "./NewCommentForm";

const NewComment = ({ id, handler }) => {
  return (
    <article className="new-comment">
      <UserIcon className="new-comment__user-icon" />
      <NewCommentForm id={id} handler={handler} />
    </article>
  );
};

export default NewComment;
