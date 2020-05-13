import React from "react";
import ViewsIcon from "../../assets/icons/SVG/Icon-views.svg";
import LikesIcon from "../../assets/icons/SVG/Icon-likes.svg";

export default class VideoInfo extends React.Component {
	render() {
		return (
			<div className="video-info container">
				<h1 className="video-info__title">BMX Rampage: 2018 Highlights</h1>
				<div className="video-info--primary">
					<h2 className="video-info__owner">By Red Cow</h2>
					<h4 className="video-info__date-posted">12/18/2018</h4>
				</div>
				<div className="video-info--secondary">
					<img src={ViewsIcon} alt="views" className="video-info__icon" />
					<h4 className="video-info__count">1,001,023</h4>
					<img src={LikesIcon} alt="likes" className="video-info__icon" />
					<h4 className="video-info__count">110,985</h4>
				</div>
				<hr className="video-info__divider" />
				<h4 className="video-info__description">
					On a gusty day in Southern Utah, a group of 25 daring mountain bikers
					blew the doors off what is possible on two wheels, unleashing some of
					the biggest moments the sport has ever seen. While mother nature only
					allowed for one full run before the conditions made it impossible to
					ride, that was all that was needed for event veteran Kyle Strait, who
					won the event for the second time -- eight years after his first Red
					Cow Rampage title
				</h4>
			</div>
		);
	}
}
