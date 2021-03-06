import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => (
	<section className="comments__list">
		<hr className="comment__divider" />
		{comments.map((comment) => (
			<Comment
				key={comment.id}
				username={comment.username}
				timestamp={comment.timestamp}
				comment={comment.comment}
			/>
		))}
	</section>
);

export default CommentsList;
