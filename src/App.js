import React from "react";
import Header from "./components/header/Header";
import VideoPlayer from "./components/main-content/VideoPlayer";
import VideoInfo from "./components/main-content/VideoInfo";
import CommentsSection from "./components/main-content/CommentsSection";
import VideoList from "./components/main-content/VideoList";

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<main>
					<VideoPlayer />
					<VideoInfo />
					<CommentsSection />
					<VideoList />
				</main>
			</div>
		);
	}
}
