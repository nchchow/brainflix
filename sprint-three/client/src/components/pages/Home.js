import React, { Component } from "react";
import axios from "axios";
import VideoPlayer from "../main-video/VideoPlayer";
import VideoInfo from "../metadata/VideoInfo";
import CommentsSection from "../sub-content/CommentsSection";
import VideoList from "../sub-content/VideoList";
import { API_KEY, URL } from "../../env/env-variables";

export default class Home extends Component {
  state = {
    mainVideo: {
      image: "",
      duration: "",
      video: "",
      comments: [],
    },
    sideVideos: [],
  };

  componentDidMount = () => {
    this.populateVideos();
  };

  componentDidUpdate = (prevState) => {
    prevState.match.url !== this.props.match.url &&
      this.populateVideos().then(window.scrollTo(0, 0));
  };

  populateVideos = async () => {
    // get all videos
    const { data } = await axios.get(`${URL}/videos?api_key=${API_KEY}`);
    let { id } = this.props.match.params;
    // find first id if there is no id already set
    if (!id) id = data[0].id;
    // get main video with id
    this.getMainVideo(id);
    // remove main video from side videos and set side videos
    this.setState({
      sideVideos: data.filter((video) => video.id !== id),
    });
  };

  getMainVideo = async (id) => {
    try {
      const { data } = await axios.get(
        `${URL}/videos/${id}?api_key=${API_KEY}`
      );
      this.setState({ mainVideo: data });
    } catch (err) {
      window.location.href = "/"; // redirects to home if no video is found
    }
  };

  render() {
    const { mainVideo } = this.state;
    const { image, duration } = mainVideo;
    return (
      <>
        <VideoPlayer image={image} duration={duration} />
        <main className="container">
          <div className="main--left">
            <VideoInfo mainVideo={mainVideo} />
            <CommentsSection
              mainVideo={mainVideo}
              populateHandler={() => this.getMainVideo(mainVideo.id)}
            />
          </div>
          <VideoList sideVideos={this.state.sideVideos} />
        </main>
      </>
    );
  }
}
