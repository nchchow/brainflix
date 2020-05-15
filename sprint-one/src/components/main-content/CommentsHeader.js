import React from "react";
import NewComment from "./NewComment";

export default function CommentsHeader(props) {
	return (
		<header className="comments__header">
			<h2 className="comments__header--title">
				{props.commentsCount} Comments
			</h2>
			<NewComment />
		</header>
	);
}
