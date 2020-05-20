import React, { Component } from "react";
import Header from "../header/Header";
import VideoPlayer from "../main-video/VideoPlayer";
import VideoInfo from "../main-video-info/VideoInfo";
import CommentsSection from "../sub-content/CommentsSection";
import VideoList from "../sub-content/VideoList";

export default class Home extends Component {
  render() {
    let {
      image,
      duration,
      title,
      description,
      channel,
      views,
      likes,
      timestamp,
      comments,
    } = this.props.mainVideo;
    return (
      <>
        <Header />
        <VideoPlayer image={image} duration={duration} />
        <main className="container">
          <div className="main--left">
            <VideoInfo
              title={title}
              description={description}
              channel={channel}
              views={views}
              likes={likes}
              timestamp={timestamp}
            />
            <CommentsSection comments={comments} />
          </div>
          <VideoList />
        </main>
      </>
    );
  }
}