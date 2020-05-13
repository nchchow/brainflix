import React from "react";
import CommentsHeader from "./CommentsHeader";
import CommentsList from "./CommentsList";

export default class CommentsSection extends React.Component {
	render() {
		return (
			<section className="comments container">
				<CommentsHeader />
				<CommentsList />
			</section>
		);
	}
}
