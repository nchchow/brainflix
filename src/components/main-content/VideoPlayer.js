import React from "react";
import VideoPlayerControls from "./VideoPlayerControls";

export default class VideoPlayer extends React.Component {
	render() {
		return (
			<video src="" className="video-player">
				<VideoPlayerControls />
			</video>
		);
	}
}
