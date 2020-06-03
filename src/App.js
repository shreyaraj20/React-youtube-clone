import React, { Component } from "react";
// import { Grid } from "@material-ui/core";
// import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetails";
import youtube from "./api/Youtube";
import "./styles.css";
class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.handleSubmit("pdf generation with react and node");
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async searchTerm => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDKosokUgq338rcz5ixUvjbyOUVWMnMx5I",
        q: searchTerm
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <div class="container-fluid">
        <h1>Youtube Clone App</h1>
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">
          <i class="fa fa-search" />
        </button>
        <div class="row">
          <div class="col-lg-8">
            <VideoDetail video={selectedVideo} />
          </div>
          <div class="col-lg-4">
            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
