import React from "react";
import Comment from "./Comment";

const CommentsList = (props) => (
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

export default CommentsList;
