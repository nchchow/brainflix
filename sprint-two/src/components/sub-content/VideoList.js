import React from "react";
import SideVideo from "./SideVideo";

const VideoList = ({ sideVideos }) => (
  <aside className="video-list container">
    <h5 className="video-list__header">NEXT VIDEO</h5>
    {sideVideos.map((sideVideo) => (
      <SideVideo
        key={sideVideo.id}
        title={sideVideo.title}
        thumbnail={sideVideo.image}
        channel={sideVideo.channel}
      />
    ))}
  </aside>
);

export default VideoList;
