import React from "react";
import Header from "./components/header/Header";
import VideoPlayer from "./components/main/VideoPlayer";
import VideoInfo from "./components/main/VideoInfo";
import CommentsSection from "./components/main/CommentsSection";

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<VideoPlayer />
				<VideoInfo />
				<CommentsSection />
			</div>
		);
	}
}
