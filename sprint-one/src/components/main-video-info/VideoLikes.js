import React from "react";
import likesIcon from "../../assets/icons/SVG/Icon-likes.svg";

const VideoLikes = ({ likes }) => (
	<>
		<img src={likesIcon} alt="likes" className="video-info__icon" />
		<h4 className="video-info__count">{likes}</h4>
	</>
);

export default VideoLikes;
