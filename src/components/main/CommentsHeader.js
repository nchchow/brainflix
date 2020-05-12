import React from "react";
import NewComment from "./NewComment";

export default class CommentsHeader extends React.Component {
	render() {
		return (
			<header className="comments__header">
				<h2 className="comments__header--title">3 Comments</h2>
				<NewComment />
				<hr className="divider" />
			</header>
		);
	}
}
