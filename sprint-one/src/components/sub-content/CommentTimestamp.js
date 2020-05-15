import React, { Component } from "react";
import { dateDifference } from "../../scripts/dateUtil";

export default class CommentTimestamp extends Component {
	state = {
		timestamp: this.props.timestamp,
		timeElapsed: dateDifference(new Date().getTime(), this.props.timestamp),
	};

	// TODO: (after implementing adding new comment function)
	// implement tick method to update time elapsed every second

	render() {
		return <span className="comment__date">{this.state.timeElapsed}</span>;
	}
}
