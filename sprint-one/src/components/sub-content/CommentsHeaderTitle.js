import React from "react";

const CommentsHeaderTitle = ({ commentsCount }) => (
	<h2 className="comments__header--title">{commentsCount} Comments</h2>
);

export default CommentsHeaderTitle;
