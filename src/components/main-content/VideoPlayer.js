import React, { Component } from "react";
import VideoPlayerControls from "./VideoPlayerControls";
import Poster from "../../assets/images/video-list-0.jpg";

export default class VideoPlayer extends Component {
	render() {
		return (
			<video poster={Poster} src="" className="video-player">
				<VideoPlayerControls />
			</video>
		);
	}
}
