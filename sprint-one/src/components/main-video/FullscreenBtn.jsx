import React from "react";
import fullscreenIcon from "../../assets/icons/SVG/Icon-fullscreen.svg";

const FullscreenBtn = () => (
	<button className="video-player__controls--fullscreen">
		<img
			src={fullscreenIcon}
			alt=""
			className="video-player__controls--fullscreen--icon"
		/>
	</button>
);

export default FullscreenBtn;
