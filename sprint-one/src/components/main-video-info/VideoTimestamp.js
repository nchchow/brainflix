import React from "react";
import DateFormatter from "../../scripts/dateFormatter";

const VideoTimestamp = (props) => (
	<h4 className="video-info__date-posted">
		{DateFormatter.dateDifference(new Date(), props.timestamp)}
	</h4>
);

export default VideoTimestamp;
