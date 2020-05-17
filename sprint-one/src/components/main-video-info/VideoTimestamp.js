import React from "react";
import useTimeElapsed from "../hooks/useTimeElapsed";

const VideoTimestamp = ({ timestamp }) => {
	const timeElapsed = useTimeElapsed(timestamp);

	return <h4 className="video-info__date-posted">{timeElapsed}</h4>;
};

export default VideoTimestamp;
