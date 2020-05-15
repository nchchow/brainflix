import React from "react";
import { timeElapsed } from "../../scripts/dateUtil";

const VideoTimestamp = (props) => (
	<h4 className="video-info__date-posted">{timeElapsed(props.timestamp)}</h4>
);

export default VideoTimestamp;
