import React, { useRef } from "react";
import { formatTime } from "../../scripts/timeUtil";
import scrubber from "../../assets/icons/SVG/Icon-scrubber-control.svg";

const Progress = ({ currentTimeInSec, duration }) => {
  const progRef = useRef();
  const progVal = () => {
    return typeof duration === "number" ? currentTimeInSec / duration : 0;
  };
  return (
    <div className="video-player__controls--progress">
      <progress
        ref={progRef}
        className="video-player__controls--progress__loader"
        value={progVal()}
        min="0"
      ></progress>
      <img
        src={scrubber}
        alt=""
        className="video-player__controls--progress__loader--scrubber"
        style={{
          left: `${
            progRef.current && progRef.current.offsetWidth * progVal() + 10
          }px`,
        }}
      />
      <div className="video-player__controls--progress__duration">
        {formatTime(currentTimeInSec)} / {formatTime(duration)}
      </div>
    </div>
  );
};

export default Progress;
