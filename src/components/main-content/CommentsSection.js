import React from "react";
import CommentsHeader from "./CommentsHeader";
import CommentsList from "./CommentsList";

export default function CommentsSection() {
	return (
		<section className="comments container">
			<CommentsHeader />
			<CommentsList />
		</section>
	);
}
