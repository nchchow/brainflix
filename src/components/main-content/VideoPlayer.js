import React from "react";
import VideoPlayerControls from "./VideoPlayerControls";
import Poster from "../../assets/images/video-list-0.jpg";

export default function VideoPlayer() {
	return (
		<video poster={Poster} src="" className="video-player">
			<VideoPlayerControls />
		</video>
	);
}
