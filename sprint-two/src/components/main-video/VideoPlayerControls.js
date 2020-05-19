import React from "react";
import IconButton from "../buttons/IconButton";
import playIcon from "../../assets/icons/SVG/Icon-play.svg";
import fullscreenIcon from "../../assets/icons/SVG/Icon-fullscreen.svg";
import volumeIcon from "../../assets/icons/SVG/Icon-volume.svg";
import Scrubber from "./Scrubber";

const VideoPlayerControls = ({ duration }) => (
  <div className="video-player__controls container">
    <IconButton
      className="video-player__controls--playPause"
      icon={playIcon}
      iconClassName="video-player__controls--playPause--icon"
    />
    <Scrubber duration={duration} />
    <div className="video-player__controls--tools-wrapper">
      <IconButton
        className="video-player__controls--fullscreen"
        icon={fullscreenIcon}
        iconClassName="video-player__controls--fullscreen--icon"
      />
      <IconButton
        className="video-player__controls--volume"
        icon={volumeIcon}
        iconClassName="video-player__controls--volume--icon"
      />
    </div>
  </div>
);

export default VideoPlayerControls;
