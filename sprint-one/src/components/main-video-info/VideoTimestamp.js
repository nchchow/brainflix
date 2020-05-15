import React from "react";
import { dateDifference } from "../../scripts/dateUtil";

const VideoTimestamp = (props) => (
	<h4 className="video-info__date-posted">
		{dateDifference(new Date(), props.timestamp)}
	</h4>
);

export default VideoTimestamp;
