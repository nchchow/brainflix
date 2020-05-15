import React from "react";
import ViewsIcon from "../../assets/icons/SVG/Icon-views.svg";

const VideoViews = (props) => (
	<>
		<img src={ViewsIcon} alt="views" className="video-info__icon" />
		<h4 className="video-info__count">{props.views}</h4>
	</>
);

export default VideoViews;
