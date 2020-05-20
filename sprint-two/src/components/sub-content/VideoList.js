import React from "react";
import { Link } from "react-router-dom";
import SideVideo from "./SideVideo";

const VideoList = ({ sideVideos }) => (
  <aside className="video-list container">
    <h5 className="video-list__header">NEXT VIDEO</h5>
    {sideVideos.map((sideVideo) => (
      <Link to={`/videos/${sideVideo.id}`} key={sideVideo.id} className="link">
        <SideVideo
          title={sideVideo.title}
          thumbnail={sideVideo.image}
          channel={sideVideo.channel}
        />
      </Link>
    ))}
  </aside>
);

export default VideoList;
