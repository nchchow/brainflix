import React from "react";

export default function SideVideo({ title, thumbnail, channel }) {
	return (
		<article className="side-video">
			<img src={thumbnail} alt="" className="side-video__thumbnail" />
			<div className="side-video--right">
				<h2 className="side-video__title">{title}</h2>
				<h4 className="side-video__owner">{channel}</h4>
			</div>
		</article>
	);
}
