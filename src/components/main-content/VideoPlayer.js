import React from "react";
import VideoPlayerControls from "./VideoPlayerControls";

export default function VideoPlayer(props) {
	return (
		<video poster={props.image} src="" className="video-player">
			<VideoPlayerControls />
		</video>
	);
}
