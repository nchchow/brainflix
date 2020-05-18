import React from "react";
import UserIcon from "../icons/UserIcon";
import NewCommentForm from "./NewCommentForm";

const NewComment = () => {
  return (
    <article className="new-comment">
      <UserIcon className="new-comment__user-icon" />
      <NewCommentForm />
    </article>
  );
};

export default NewComment;
