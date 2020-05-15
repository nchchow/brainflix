import React from "react";
import VideoTitle from "./VideoTitle";
import VideoChannel from "./VideoChannel";
import VideoTimestamp from "./VideoTimestamp";
import VideoViews from "./VideoViews";
import VideoLikes from "./VideoLikes";
import VideoDescription from "./VideoDescription";

const VideoInfo = (props) => {
	let { title, description, channel, views, likes, timestamp } = props;

	return (
		<div className="video-info container">
			<VideoTitle title={title} />
			<div className="video-info--wrapper">
				<div className="video-info--primary">
					<VideoChannel channel={channel} />
					<VideoTimestamp timestamp={timestamp} />
				</div>
				<div className="video-info--secondary">
					<VideoViews views={views} />
					<VideoLikes likes={likes} />
				</div>
			</div>
			<hr className="video-info__divider" />
			<VideoDescription description={description} />
		</div>
	);
};

export default VideoInfo;
