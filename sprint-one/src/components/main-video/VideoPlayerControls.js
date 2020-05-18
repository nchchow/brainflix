import React from "react";
import PlayPauseButton from "./PlayPauseButton";
import Scrubber from "./Scrubber";
import FullscreenButton from "./FullscreenButton";
import VolumeButton from "./VolumeButton";

const VideoPlayerControls = ({ duration }) => (
  <div className="video-player__controls container">
    <PlayPauseButton />
    <Scrubber duration={duration} />
    <div className="video-player__controls--tools-wrapper">
      <FullscreenButton />
      <VolumeButton />
    </div>
  </div>
);

export default VideoPlayerControls;
