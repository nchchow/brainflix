import React from "react";

const Scrubber = ({ duration }) => (
	<div className="video-player__controls--scrubber">
		<div className="video-player__controls--scrubber__loader"></div>
		<div className="video-player__controls--scrubber__duration">
			0:00 / {duration}
		</div>
	</div>
);

export default Scrubber;
