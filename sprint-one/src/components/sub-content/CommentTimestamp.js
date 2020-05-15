import React, { Component } from "react";

export default class CommentTimestamp extends Component {
	state = {
		timestamp: this.props.timestamp,
	};
	render() {
		return <span className="comment__date">{this.state.timestamp}</span>;
	}
}
