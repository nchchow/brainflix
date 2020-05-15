import React, { Component } from "react";
import { timeElapsed } from "../../scripts/dateUtil";

export default class CommentTimestamp extends Component {
	state = {
		// timestamp: this.props.timestamp,
		timeElapsed: timeElapsed(this.props.timestamp),
	};

	// TODO: (after implementing adding new comment function)
	// implement tick method to update time elapsed every second

	render() {
		return <span className="comment__date">{this.state.timeElapsed}</span>;
	}
}
