import React from "react";

export default class PrimaryInfo extends React.Component {
	render() {
		return (
			<div className="primary-info">
				<h1 className="primary-info__title">BMX Rampage: 2018 Highlights</h1>
				<h2 className="primary-info__owner">By Red Cow</h2>
				<h4 className="primary-info__date-posted">12/18/2018</h4>
				<img
					src="../../assets/icons/SVG/Icon-views.svg"
					alt=""
					className="primary-info__views--icon"
				/>
				<h4 className="primary-info__views--count">1,001,023</h4>
				<img
					src="../../assets/icons/SVG/Icon-likes.svg"
					alt=""
					className="primary-info__likes--icon"
				/>
				<h4 className="primary-info__likes--count">110,985</h4>
				<hr className="divider" />
			</div>
		);
	}
}
