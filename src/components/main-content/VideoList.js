import React, { Component } from "react";
import SideVideo from "./SideVideo";
import videoImage1 from "../../assets/images/video-list-1.jpg";
import videoImage2 from "../../assets/images/video-list-2.jpg";
import videoImage3 from "../../assets/images/video-list-3.jpg";
import videoImage4 from "../../assets/images/video-list-4.jpg";
import videoImage5 from "../../assets/images/video-list-5.jpg";
import videoImage6 from "../../assets/images/video-list-6.jpg";
import videoImage7 from "../../assets/images/video-list-7.jpg";
import videoImage8 from "../../assets/images/video-list-8.jpg";

export default class VideoList extends Component {
	state = {
		sideVideos: [
			{
				id: 1,
				title: "Become a Travel Pro In One Easy Lesson",
				thumbnail: videoImage1,
				channel: "Scotty Cranmer",
			},
			{
				id: 2,
				title: "Les Houches The Hidden Gem Of The Chamonix",
				thumbnail: videoImage2,
				channel: "Cornelia Blair",
			},
			{
				id: 3,
				title: "Travel Health Useful Medical Information For",
				thumbnail: videoImage3,
				channel: "Glen Harper",
			},
			{
				id: 4,
				title: "Cheap Airline Tickets Great Ways To Save",
				thumbnail: videoImage4,
				channel: "Emily Harper",
			},
			{
				id: 5,
				title: "Take A Romantic Break In A Boutique Hotel",
				thumbnail: videoImage5,
				channel: "Ethan Own",
			},
			{
				id: 6,
				title: "Choose The Perfect Accommodations",
				thumbnail: videoImage6,
				channel: "Lydia Perez",
			},
			{
				id: 7,
				title: "Cruising Destination Ideas",
				thumbnail: videoImage7,
				channel: "Timothy Austin",
			},
			{
				id: 8,
				title: "Train Travel On Track For Safety",
				thumbnail: videoImage8,
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
