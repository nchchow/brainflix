import React, { Component, createRef } from "react";
import VideoPlayerControls from "./VideoPlayerControls";
import video from "../../assets/video/BrainStation Sample Video.mp4";

export default class VideoPlayer extends Component {
  vidRef = createRef();
  state = {
    isPlaying: false,
    volume: 1,
    currentTimeInSec: 0,
    duration: this.props.duration,
  };

  playPause = () => {
    this.state.isPlaying ? this.pauseVideo() : this.playVideo();
  };

  playVideo = () => {
    this.setState({ isPlaying: true });
    this.vidRef.current.play();
  };

  pauseVideo = () => {
    this.setState({ isPlaying: false });
    this.vidRef.current.pause();
  };

  fullscreen = () => {
    this.vidRef.current.requestFullscreen();
  };

  volume = () => {
    this.state.volume === 1 ? this.mute() : this.unmute();
  };

  mute = () => {
    this.setState({ volume: 0 });
    this.vidRef.current.volume = 0;
  };

  unmute = () => {
    this.setState({ volume: 1 });
    this.vidRef.current.volume = 1;
  };

  timeUpdateHandler = () => {
    this.setState({ currentTimeInSec: this.vidRef.current.currentTime });
  };

  loadedHandler = () => {
    this.setState({
      isPlaying: false,
      currentTimeInSec: 0,
      duration: this.vidRef.current.duration,
    });
  };

  endedHandler = () => {
    this.setState({ isPlaying: false });
    this.vidRef.current.load();
  };

  render() {
    const controls = {
      playPause: this.playPause,
      fullscreen: this.fullscreen,
      volume: this.volume,
    };
    return (
      <div className="video-player-wrapper">
        <video
          key={this.props.mainVideo.id}
          poster={this.props.mainVideo.image}
          src={video}
          ref={this.vidRef}
          className="video-player"
          type="video/mp4"
          onTimeUpdate={this.timeUpdateHandler}
          onLoadedMetadata={this.loadedHandler}
          onEnded={this.endedHandler}
        ></video>
        <VideoPlayerControls
          isPlaying={this.state.isPlaying}
          currentTimeInSec={this.state.currentTimeInSec}
          duration={this.state.duration}
          controls={controls}
        />
      </div>
    );
  }
}
