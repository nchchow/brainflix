import React from "react";

const CommentsHeaderTitle = ({ commentsCount }) => (
	<h2 className="comments__header--title">{commentsCount} Comment{commentsCount !== 1 && "s"}</h2>
);

export default CommentsHeaderTitle;
