import React, { Component } from "react";
import SideVideo from "./SideVideo";

export default class VideoList extends Component {
	render() {
		return (
			<aside className="video-list container">
				<h5 className="video-list__header">NEXT VIDEO</h5>
				<SideVideo />
				<SideVideo />
				<SideVideo />
				<SideVideo />
				<SideVideo />
				<SideVideo />
				<SideVideo />
				<SideVideo />
			</aside>
		);
	}
}
