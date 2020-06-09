import React from "react";

interface VideoLinkProps {

}

export const VideoLink: React.FC<VideoLinkProps> = (props: VideoLinkProps) => {
  return(
    <div className="video-link">
      <img className="video-thumbnail" src="/img/thumbnail.png" />
      <div className="video-info">
        <img className="video-channel-img" src="/img/profile.png" />
        <div className="video-details">
          <div className="video-title">
            <h1>Let's Build It | YouTube</h1>
          </div>
          <div className="video-channel-name">
            <h1>FrontEndDev</h1>
          </div>
          <div className="video-stats">
            <h1>
              <span className="video-views">125k views</span> · <span className="video-upload-date">1 day ago</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}