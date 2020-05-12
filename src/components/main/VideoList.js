import React from "react";
import VideoItem from "./VideoItem";

export default class VideoList extends React.Component {
	render() {
		return (
			<aside className="video-list">
				<h5 className="video-list__next-video">NEXT VIDEO</h5>
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
			</aside>
		);
	}
}
