import React from "react";
import playIcon from "../../assets/icons/SVG/Icon-play.svg";
import fullscreenIcon from "../../assets/icons/SVG/Icon-fullscreen.svg";
import volumeIcon from "../../assets/icons/SVG/Icon-volume.svg";

export default function VideoPlayerControls() {
	return (
		<div className="video-player__controls container">
			<button className="video-player__controls--playPause">
				<img
					src={playIcon}
					alt=""
					className="video-player__controls--playPause--Icon"
				/>
			</button>
			<div className="video-player__controls--scrubber">
				<div className="video-player__controls--scrubber__loader"></div>
			</div>
			<div className="video-player__controls--tools-wrapper">
				<button className="video-player__controls--fullscreen">
					<img
						src={fullscreenIcon}
						alt=""
						className="video-player__controls--fullscreen--icon"
					/>
				</button>
				<button className="video-player__controls--volume">
					<img
						src={volumeIcon}
						alt=""
						className="video-player__controls--volume--icon"
					/>
				</button>
			</div>
		</div>
	);
}
