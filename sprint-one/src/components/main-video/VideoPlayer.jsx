import React from "react";
import VideoPlayerControls from "./VideoPlayerControls";

const VideoPlayer = (props) => (
	<div className="video-player-wrapper">
		<video poster={props.image} src="" className="video-player"></video>
		<VideoPlayerControls duration={props.duration} />
	</div>
);

export default VideoPlayer;
