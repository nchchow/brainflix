import React, { Component } from "react";
import Comment from "./Comment";

export default class CommentsList extends Component {
	render() {
		return (
			<section className="comments__list">
				<hr className="comment__divider" />
				<Comment />
				<hr className="comment__divider" />
				<Comment />
				<hr className="comment__divider" />
				<Comment />
				<hr className="comment__divider" />
			</section>
		);
	}
}
