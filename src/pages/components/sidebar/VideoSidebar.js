import React, { useState } from "react";
import "./videoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSidebar() {
  const [liked, setLiked] = useState(false);

  function handdleLike() {
    setLiked(!liked);
  }

  return (
    <div className="videoSidebar">
      <div className="videoSidebar-options" onClick={handdleLike}>
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        <p>{liked ? 300 + 1 : 300}</p>
      </div>
      <div className="videoSidebar-options">
        <ChatIcon fontSize="large" />
        <p>200</p>
      </div>
      <div className="videoSidebar-options">
        <ShareIcon fontSize="large" />
        <p>100</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
