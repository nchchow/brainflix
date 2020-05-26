import React from "react";
import VideoPlayerControls from "./VideoPlayerControls";

const VideoPlayer = ({ image, duration }) => (
	<div className="video-player-wrapper">
		<video poster={image} src="" className="video-player"></video>
		<VideoPlayerControls duration={duration} />
	</div>
);

export default VideoPlayer;
