import React from "react";
import { Typography } from "@material-ui/core";
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="videoitem" onClick={() => onVideoSelect(video)}>
      <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
      <div className="item">
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </div>
    </div>
  );
};
export default VideoItem;
