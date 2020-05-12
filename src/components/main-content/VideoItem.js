import React from "react";

export default class VideoItem extends React.Component {
	render() {
		return (
			<article className="video-item">
				<img src="" alt="" className="video-item__thumbnail" />
				<h2 className="video-item__title">
					Become a Travel Pro In 9 Easy Lesson
				</h2>
				<h4 className="video-item__owner">Scotty Cranmer</h4>
			</article>
		);
	}
}
