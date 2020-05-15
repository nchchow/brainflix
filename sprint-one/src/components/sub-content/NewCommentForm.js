import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import NewCommentBtn from "./NewCommentBtn";

const NewCommentForm = () => (
	<form className="new-comment--form">
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
		<NewCommentBtn />
	</form>
);

export default NewCommentForm;
