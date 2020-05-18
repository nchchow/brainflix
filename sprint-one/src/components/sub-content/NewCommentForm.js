import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import NewCommentButton from "./NewCommentButton";

const NewCommentForm = () => {
  const formHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className="new-comment--form" onSubmit={formHandler}>
      <div className="new-comment--content--wrapper">
        <h5 className="new-comment__content--header">JOIN THE CONVERSATION</h5>
        <TextareaAutosize
          name=""
          id=""
          maxRows={5}
          className="new-comment__content"
          placeholder="Add a comment"
        ></TextareaAutosize>
      </div>
      <NewCommentButton />
    </form>
  );
};

export default NewCommentForm;
