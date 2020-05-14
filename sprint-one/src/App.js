import React from "react";
import Header from "./components/header/Header";
import VideoPlayer from "./components/main-content/VideoPlayer";
import VideoInfo from "./components/main-content/VideoInfo";
import CommentsSection from "./components/main-content/CommentsSection";
import VideoList from "./components/main-content/VideoList";

export default class App extends React.Component {
	state = {
		mainVideo: {
			id: "afoanfAEFNIFNAealinfo124",
			title: "BMX Rampage: 2018 Highlights",
			description:
				"On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
			channel: "By Red Cow",
			image: "./images/video-list-0.jpg",
			views: "1,001,023",
			likes: "110,985",
			duration: "0:42",
			video: "type of <string>",
			timestamp: "12/18/2018",
			comments: [
				{
					id: 1,
					name: "Micheal Lyons",
					timestamp: "12/18/2018",
					comment:
						"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
				},
				{
					id: 2,
					name: "Gary Wong",
					timestamp: "12/18/2018",
					comment:
						"Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
				},
				{
					id: 3,
					name: "Theodore Duncan",
					timestamp: "11/15/2018",
					comment:
						"How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
				},
			],
		},
	};

	render() {
		return (
			<div className="App">
				<Header />
				<main>
					<VideoPlayer image={this.state.mainVideo.image} />
					<VideoInfo
						title={this.state.mainVideo.title}
						description={this.state.mainVideo.description}
						channel={this.state.mainVideo.channel}
						views={this.state.mainVideo.views}
						likes={this.state.mainVideo.likes}
						timestamp={this.state.mainVideo.timestamp}
					/>
					<CommentsSection comments={this.state.mainVideo.comments} />
					<VideoList />
				</main>
			</div>
		);
	}
}
