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
    this.populateVideos();
  };

  componentDidUpdate = (prevState) => {
    if (prevState.match.url !== this.props.match.url) this.populateVideos();
  };

  populateVideos = () => {
    // get all videos
    axios.get(`${URL}/videos?api_key=${API_KEY}`).then((res) => {
      let { id } = this.props.match.params;
      // find first id if there is no id already set
      if (!id) id = res.data[0].id;

      // get main video with id
      axios.get(`${URL}/videos/${id}?api_key=${API_KEY}`).then((res) => {
        this.setState({ mainVideo: res.data });
      });
      // remove main video from side videos and set side videos
      this.setState({
        sideVideos: res.data.filter((video) => video.id !== id),
      });
    });
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
