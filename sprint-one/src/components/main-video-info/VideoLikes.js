import React from "react";
import LikesIcon from "../../assets/icons/SVG/Icon-likes.svg";

const VideoLikes = (props) => (
	<>
		<img src={LikesIcon} alt="likes" className="video-info__icon" />
		<h4 className="video-info__count">{props.likes}</h4>
	</>
);

export default VideoLikes;
