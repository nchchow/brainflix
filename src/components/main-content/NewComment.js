import React from "react";
import UserIcon from "../../assets/images/Mohan-muruge.jpg";

export default function NewComment() {
	return (
		<article className="new-comment">
			<img src={UserIcon} alt="user" className="new-comment__user-icon" />
			<div className="new-comment--right">
				<h5 className="new-comment__content--header">JOIN THE CONVERSATION</h5>
				<textarea
					name=""
					id=""
					cols="30"
					rows="10"
					className="new-comment__content"
					placeholder="Add a comment"
				></textarea>
				<button className="new-comment__button">COMMENT</button>
			</div>
		</article>
	);
}
