import React from "react";
import VideoPlayerControls from "./VideoPlayerControls";

export default function VideoPlayer(props) {
	return (
		<div className="video-player-wrapper">
			<video poster={props.image} src="" className="video-player"></video>
			<VideoPlayerControls />
		</div>
	);
}
