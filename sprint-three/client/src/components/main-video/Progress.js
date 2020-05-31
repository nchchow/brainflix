import React from "react";

const Progress = ({ duration }) => (
  <div className="video-player__controls--progress">
    <progress
      className="video-player__controls--progress__loader"
      value="0"
      min="0"
    ></progress>
    <div className="video-player__controls--progress__duration">
      0:00 / {duration}
    </div>
  </div>
);

export default Progress;
