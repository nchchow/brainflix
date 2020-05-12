import React from "react";
import Comment from "./Comment";

export default class CommentsList extends React.Component {
	render() {
		return (
			<section className="comments-list">
				<Comment />
				<Comment />
				<Comment />
			</section>
		);
	}
}
