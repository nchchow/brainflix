import React from "react";
import viewsIcon from "../../assets/icons/SVG/Icon-views.svg";

const VideoViews = ({ views }) => (
	<>
		<img src={viewsIcon} alt="views" className="video-info__icon" />
		<h4 className="video-info__count">{views}</h4>
	</>
);

export default VideoViews;
