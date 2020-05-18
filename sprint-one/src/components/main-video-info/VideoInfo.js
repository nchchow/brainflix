import React from "react";
import VideoTitle from "./VideoTitle";
import VideoChannel from "./VideoChannel";
import Timestamp from "../metadata/Timestamp";
import Count from "../metadata/Count";
import VideoDescription from "./VideoDescription";
import viewsIcon from "../../assets/icons/SVG/Icon-views.svg";
import likesIcon from "../../assets/icons/SVG/Icon-likes.svg";

const VideoInfo = (props) => {
  let { title, description, channel, views, likes, timestamp } = props;

  return (
    <div className="video-info container">
      <VideoTitle title={title} />
      <div className="video-info--wrapper">
        <div className="video-info--primary">
          <VideoChannel channel={channel} />
          <Timestamp
            className="video-info__date-posted"
            timestamp={timestamp}
          />
        </div>
        <div className="video-info--secondary">
          <Count icon={viewsIcon} value={views} />
          <Count icon={likesIcon} value={likes} />
        </div>
      </div>
      <hr className="video-info__divider" />
      <VideoDescription description={description} />
    </div>
  );
};

export default VideoInfo;
