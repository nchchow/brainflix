import React from "react";
import volumeIcon from "../../assets/icons/SVG/Icon-volume.svg";

const VolumeButton = () => (
  <button className="video-player__controls--volume">
    <img
      src={volumeIcon}
      alt=""
      className="video-player__controls--volume--icon"
    />
  </button>
);

export default VolumeButton;
