import React from "react";
import Thumbnail from "../../assets/images/video-list-1.jpg";

export default function SideVideo() {
	return (
		<article className="side-video">
			<img src={Thumbnail} alt="" className="side-video__thumbnail" />
			<div className="side-video--right">
				<h2 className="side-video__title">
					Become a Travel Pro In 9 Easy Lesson
				</h2>
				<h4 className="side-video__owner">Scotty Cranmer</h4>
			</div>
		</article>
	);
}
