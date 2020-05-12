import React from "react";
import Header from "./components/header/Header";
import VideoPlayer from "./components/main/VideoPlayer";
import PrimaryInfo from "./components/main/PrimaryInfo";

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<VideoPlayer />
				<PrimaryInfo />
			</div>
		);
	}
}
