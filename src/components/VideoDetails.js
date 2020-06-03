import React from "react";

import { Paper, Typography } from "@material-ui/core";

const VideoDetails = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div class="videodetails">
      <iframe
        frameBorder="0"
        height="100%"
        width="100%"
        title="Video Player"
        src={videoSrc}
      />

      <Typography variant="h4">
        {video.snippet.title} - {video.snippet.channelTitle}
      </Typography>
      <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
      <Typography variant="subtitle2">{video.snippet.description}</Typography>
    </div>
  );
};
export default VideoDetails;
