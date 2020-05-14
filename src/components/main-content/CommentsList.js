import React from "react";
import Comment from "./Comment";

export default function CommentsList(props) {
	return (
		<section className="comments__list">
			<hr className="comment__divider" />
			{props.comments.map((comment) => (
				<Comment
					key={comment.id}
					name={comment.name}
					timestamp={comment.timestamp}
					comment={comment.comment}
				/>
			))}
		</section>
	);
}
