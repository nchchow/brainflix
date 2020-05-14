import React from "react";
import UserIcon from "../../assets/images/Mohan-muruge.jpg";
import TextareaAutosize from "react-textarea-autosize";

export default function NewComment() {
	return (
		<article className="new-comment">
			<img src={UserIcon} alt="user" className="new-comment__user-icon" />
			<form className="new-comment--form">
				<div className="new-comment--content--wrapper">
					<h5 className="new-comment__content--header">
						JOIN THE CONVERSATION
					</h5>
					<TextareaAutosize
						name=""
						id=""
						maxRows={5}
						className="new-comment__content"
						placeholder="Add a comment"
					></TextareaAutosize>
				</div>
				<button className="new-comment__button">COMMENT</button>
			</form>
		</article>
	);
}
