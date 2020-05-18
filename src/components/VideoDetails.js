import React from "react";

import { Paper, Typography } from "@material-ui/core";

const VideoDetails = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Paper
        elevation={6}
        style={{ height: "25%", margin: "10px", width: "700px" }}
      >
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper
        elevation={6}
        style={{ padding: "15px", backgroundColor: "black", color: "#c7c5c1" }}
      >
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
};
export default VideoDetails;
