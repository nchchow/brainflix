import React, { Component } from "react";
import axios from "axios";
import VideoPlayer from "../main-video/VideoPlayer";
import VideoInfo from "../metadata/VideoInfo";
import CommentsSection from "../sub-content/CommentsSection";
import VideoList from "../sub-content/VideoList";

const API_KEY = "14b626c6-5929-4318-9084-33bee95a76bc";
const URL = "https://project-2-api.herokuapp.com";

export default class Home extends Component {
  state = {
    mainVideo: {
      id: "",
      title: "",
      description: "",
      channel: "",
      image: "",
      views: "",
      likes: "",
      duration: "",
      video: "",
      timestamp: new Date().getTime(),
      comments: [],
    },
    sideVideos: [],
  };

  componentDidMount = () => {
    // initial api call
    let id = "";
    axios
      .get(`${URL}/videos?api_key=${API_KEY}`)
      .then((res) => {
        id = res.data.shift().id; // get first id and remove from side videos
        this.setState({ sideVideos: res.data });
      })
      .then(() => this.searchVideo(id)); // search for video content based on first id
  };

  searchVideo = (id) => {
    axios
      .get(`${URL}/videos/${id}?api_key=${API_KEY}`)
      .then((res) => this.setState({ mainVideo: res.data }));
  };
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
    } = this.state.mainVideo;
    return (
      <>
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
          <VideoList sideVideos={this.state.sideVideos} />
        </main>
      </>
    );
  }
}
