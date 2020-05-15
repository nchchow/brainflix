import React from "react";
import CommentsHeader from "./CommentsHeader";
import CommentsList from "./CommentsList";

const CommentsSection = ({ comments }) => (
	<section className="comments container">
		<CommentsHeader commentsCount={comments.length} />
		<CommentsList comments={comments} />
	</section>
);

export default CommentsSection;
