import React from "react";
import CommentsHeader from "./CommentsHeader";
import CommentsList from "./CommentsList";

export default function CommentsSection(props) {
	return (
		<section className="comments container">
			<CommentsHeader />
			<CommentsList comments={props.comments} />
		</section>
	);
}