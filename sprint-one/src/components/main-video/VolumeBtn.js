import React from "react";
import volumeIcon from "../../assets/icons/SVG/Icon-volume.svg";

const VolumeBtn = () => (
	<button className="video-player__controls--volume">
		<img
			src={volumeIcon}
			alt=""
			className="video-player__controls--volume--icon"
		/>
	</button>
);

export default VolumeBtn;
