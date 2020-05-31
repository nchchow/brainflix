import React, { Component, createRef } from "react";
import VideoPlayerControls from "./VideoPlayerControls";
import { API_KEY } from "../../env/env-variables";

export default class VideoPlayer extends Component {
  vidRef = createRef();
  state = {
    isPlaying: false,
    volume: 1,
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

  render() {
    const { image, video, duration } = this.props.mainVideo;
    const controls = {
      playPause: this.playPause,
      fullscreen: this.fullscreen,
      volume: this.volume,
    };
    return (
      <div className="video-player-wrapper">
        <video
          poster={image}
          src={`${video}?api_key=${API_KEY}`}
          ref={this.vidRef}
          className="video-player"
          type="video/mp4"
        ></video>
        <VideoPlayerControls
          isPlaying={this.state.isPlaying}
          duration={duration}
          controls={controls}
        />
      </div>
    );
  }
}
