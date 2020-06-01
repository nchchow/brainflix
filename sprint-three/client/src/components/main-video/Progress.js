import React from "react";
import { formatTime } from "../../scripts/timeUtil";

const Progress = ({ currentTimeInSec, duration }) => {
  const progVal = () => {
    return typeof duration === "number" ? currentTimeInSec / duration : 0;
  };
  return (
    <div className="video-player__controls--progress">
      <progress
        className="video-player__controls--progress__loader"
        value={progVal()}
        min="0"
      ></progress>
      <div className="video-player__controls--progress__duration">
        {formatTime(currentTimeInSec)} / {formatTime(duration)}
      </div>
    </div>
  );
};

export default Progress;
