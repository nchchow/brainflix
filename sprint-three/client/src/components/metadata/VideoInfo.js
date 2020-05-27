import React from "react";
import Text from "./Text";
import Timestamp from "./Timestamp";
import Count from "./Count";
import viewsIcon from "../../assets/icons/SVG/Icon-views.svg";
import likesIcon from "../../assets/icons/SVG/Icon-likes.svg";

const VideoInfo = ({ mainVideo }) => {
  const { title, description, channel, views, likes, timestamp } = mainVideo;

  return (
    <div className="video-info container">
      <Text className="video-info__title" value={title} />
      <div className="video-info--wrapper">
        <div className="video-info--primary">
          <Text className="video-info__channel" value={channel} />
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
      <Text className="video-info__description" value={description} />
    </div>
  );
};

export default VideoInfo;