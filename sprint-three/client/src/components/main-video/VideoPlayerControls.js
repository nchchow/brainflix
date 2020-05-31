import React from "react";
import IconButton from "../buttons/IconButton";
import playIcon from "../../assets/icons/SVG/Icon-play.svg";
import pauseIcon from "../../assets/icons/SVG/Icon-pause.svg";
import fullscreenIcon from "../../assets/icons/SVG/Icon-fullscreen.svg";
import volumeIcon from "../../assets/icons/SVG/Icon-volume.svg";
import Progress from "./Progress";

const VideoPlayerControls = ({ isPlaying, duration, controls }) => (
  <div className="video-player__controls container">
    <IconButton
      className="video-player__controls--playPause"
      icon={isPlaying ? pauseIcon : playIcon}
      iconClassName="video-player__controls--playPause--icon"
      onClick={controls.playPause}
    />
    <Progress duration={duration} />
    <div className="video-player__controls--tools-wrapper">
      <IconButton
        className="video-player__controls--fullscreen"
        icon={fullscreenIcon}
        iconClassName="video-player__controls--fullscreen--icon"
        onClick={controls.fullscreen}
      />
      <IconButton
        className="video-player__controls--volume"
        icon={volumeIcon}
        iconClassName="video-player__controls--volume--icon"
        onClick={controls.volume}
      />
    </div>
  </div>
);

export default VideoPlayerControls;
