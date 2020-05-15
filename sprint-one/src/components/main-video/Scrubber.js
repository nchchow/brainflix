import React from "react";

const Scrubber = (props) => (
	<div className="video-player__controls--scrubber">
		<div className="video-player__controls--scrubber__loader"></div>
		<div className="video-player__controls--scrubber__duration">
			0:00 / {props.duration}
		</div>
	</div>
);

export default Scrubber;
