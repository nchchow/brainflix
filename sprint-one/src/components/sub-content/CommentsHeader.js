import React from "react";
import NewComment from "./NewComment";
import CommentsHeaderTitle from "./CommentsHeaderTitle";

const CommentsHeader = (props) => (
	<header className="comments__header">
		<CommentsHeaderTitle commentsCount={props.commentsCount} />
		<NewComment />
	</header>
);

export default CommentsHeader;
