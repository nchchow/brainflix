import React from "react";
import CommentsHeader from "./CommentsHeader";
import CommentsList from "./CommentsList";

const CommentsSection = (props) => (
	<section className="comments container">
		<CommentsHeader commentsCount={props.comments.length} />
		<CommentsList comments={props.comments} />
	</section>
);

export default CommentsSection;
