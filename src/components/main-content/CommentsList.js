import React from "react";
import Comment from "./Comment";

export default function CommentsList() {
	return (
		<section className="comments__list">
			<hr className="comment__divider" />
			<Comment />
			<hr className="comment__divider" />
			<Comment />
			<hr className="comment__divider" />
			<Comment />
			<hr className="comment__divider" />
		</section>
	);
}
