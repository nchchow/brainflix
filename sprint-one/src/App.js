import React from "react";
import Header from "./components/header/Header";
import VideoPlayer from "./components/main-video/VideoPlayer";
import VideoInfo from "./components/main-video-info/VideoInfo";
import CommentsSection from "./components/sub-content/CommentsSection";
import VideoList from "./components/sub-content/VideoList";

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
			video: "",
			timestamp: 1514937200000,
			comments: [
				{
					id: 1,
					username: "Micheal Lyons",
					timestamp: 1581753600000,
					comment:
						"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
				},
				{
					id: 2,
					username: "Gary Wong",
					timestamp: 1530744338878,
					comment:
						"Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
				},
				{
					id: 3,
					username: "Theodore Duncan",
					timestamp: 1542268800000,
					comment:
						"How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
				},
			],
		},
	};

	render() {
		let {
			image,
			duration,
			title,
			description,
			channel,
			views,
			likes,
			timestamp,
			comments,
		} = this.state.mainVideo;
		return (
			<div className="App">
				<Header />
				<VideoPlayer image={image} duration={duration} />
				<main className="container">
					<div className="main--left">
						<VideoInfo
							title={title}
							description={description}
							channel={channel}
							views={views}
							likes={likes}
							timestamp={timestamp}
						/>
						<CommentsSection comments={comments} />
					</div>
					<VideoList />
				</main>
			</div>
		);
	}
}
