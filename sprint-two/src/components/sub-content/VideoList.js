import React, { Component } from "react";
import SideVideo from "./SideVideo";

export default class VideoList extends Component {
	state = {
		sideVideos: [
			{
				id: 1,
				title: "Become a Travel Pro In One Easy Lesson",
				thumbnail: "./images/video-list-1.jpg",
				channel: "Scotty Cranmer",
			},
			{
				id: 2,
				title: "Les Houches The Hidden Gem Of The Chamonix",
				thumbnail: "./images/video-list-2.jpg",
				channel: "Cornelia Blair",
			},
			{
				id: 3,
				title: "Travel Health Useful Medical Information For",
				thumbnail: "./images/video-list-3.jpg",
				channel: "Glen Harper",
			},
			{
				id: 4,
				title: "Cheap Airline Tickets Great Ways To Save",
				thumbnail: "./images/video-list-4.jpg",
				channel: "Emily Harper",
			},
			{
				id: 5,
				title: "Take A Romantic Break In A Boutique Hotel",
				thumbnail: "./images/video-list-5.jpg",
				channel: "Ethan Own",
			},
			{
				id: 6,
				title: "Choose The Perfect Accommodations",
				thumbnail: "./images/video-list-6.jpg",
				channel: "Lydia Perez",
			},
			{
				id: 7,
				title: "Cruising Destination Ideas",
				thumbnail: "./images/video-list-7.jpg",
				channel: "Timothy Austin",
			},
			{
				id: 8,
				title: "Train Travel On Track For Safety",
				thumbnail: "./images/video-list-8.jpg",
				channel: "Scotty Cranmer",
			},
		],
	};

	render() {
		return (
			<aside className="video-list container">
				<h5 className="video-list__header">NEXT VIDEO</h5>
				{this.state.sideVideos.map((sideVideo) => (
					<SideVideo
						key={sideVideo.id}
						title={sideVideo.title}
						thumbnail={sideVideo.thumbnail}
						channel={sideVideo.channel}
					/>
				))}
			</aside>
		);
	}
}
