import React from "react";
import ViewsIcon from "../../assets/icons/SVG/Icon-views.svg";
import LikesIcon from "../../assets/icons/SVG/Icon-likes.svg";

export default function VideoInfo(props) {
	let { title, description, channel, views, likes, timestamp } = props;

	return (
		<div className="video-info container">
			<h1 className="video-info__title">{title}</h1>
			<div className="video-info--primary">
				<h2 className="video-info__owner">{channel}</h2>
				<h4 className="video-info__date-posted">{timestamp}</h4>
			</div>
			<div className="video-info--secondary">
				<img src={ViewsIcon} alt="views" className="video-info__icon" />
				<h4 className="video-info__count">{views}</h4>
				<img src={LikesIcon} alt="likes" className="video-info__icon" />
				<h4 className="video-info__count">{likes}</h4>
			</div>
			<hr className="video-info__divider" />
			<h4 className="video-info__description">{description}</h4>
		</div>
	);
}
