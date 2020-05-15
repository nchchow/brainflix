import React from "react";
import NewComment from "./NewComment";
import CommentsHeaderTitle from "./CommentsHeaderTitle";

const CommentsHeader = ({ commentsCount }) => (
	<header className="comments__header">
		<CommentsHeaderTitle commentsCount={commentsCount} />
		<NewComment />
	</header>
);

export default CommentsHeader;
