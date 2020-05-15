import React, { Component } from "react";
import DateFormatter from "../../scripts/dateFormatter";

export default class CommentTimestamp extends Component {
	state = {
		timestamp: DateFormatter.dateDifference(
			new Date().getTime(),
			this.props.timestamp
		),
	};

	render() {
		return <span className="comment__date">{this.state.timestamp}</span>;
	}
}
