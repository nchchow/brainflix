import React from "react";
import playIcon from "../../assets/icons/SVG/Icon-play.svg";

const PlayPauseButton = () => (
  <button className="video-player__controls--playPause">
    <img
      src={playIcon}
      alt=""
      className="video-player__controls--playPause--Icon"
    />
  </button>
);

export default PlayPauseButton;
