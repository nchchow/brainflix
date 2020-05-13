import React, { Component } from "react";
import NewComment from "./NewComment";

export default class CommentsHeader extends Component {
	render() {
		return (
			<header className="comments__header">
				<h2 className="comments__header--title">3 Comments</h2>
				<NewComment />
			</header>
		);
	}
}
