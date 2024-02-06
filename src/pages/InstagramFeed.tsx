import React from "react";
import video1 from "../../public/reels/1.mp4";
import video2 from "../../public/reels/2.mp4";
import video3 from "../../public/reels/3.mp4";
import video4 from "../../public/reels/4.mp4";
import video5 from "../../public/reels/5.mp4";
import video6 from "../../public/reels/6.mp4";
import video7 from "../../public/reels/7.mp4";
import video8 from "../../public/reels/8.mp4";
import video9 from "../../public/reels/9.mp4";
import video10 from "../../public/reels/10.mp4";

const InstagramFeed = () => {
  return (
    <div className="instagramfeed_contianer">
      <div className="instagramfeed_wrapper">
        <h1>
          <span>Instagram </span>feed
        </h1>
        <div className="reel_container">
          <div className="reel_wrapper">
            <video
              src={video1}
              controls
              style={{ width: "100%", height: "100%" }}
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="reel_wrapper">
            <video
              src={video2}
              controls
              style={{ width: "100%", height: "100%" }}
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="reel_wrapper">
            <video
              src={video3}
              controls
              style={{ width: "100%", height: "100%" }}
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="reel_wrapper">
            <video
              src={video4}
              controls
              style={{ width: "100%", height: "100%" }}
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="reel_wrapper">
            <video
              src={video5}
              controls
              style={{ width: "100%", height: "100%" }}
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="reel_wrapper">
            <video
              src={video6}
              controls
              style={{ width: "100%", height: "100%" }}
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="reel_wrapper">
            <video
              src={video7}
              controls
              style={{ width: "100%", height: "100%" }}
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="reel_wrapper">
            <video
              src={video8}
              controls
              style={{ width: "100%", height: "100%" }}
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="reel_wrapper">
            <video
              src={video9}
              controls
              style={{ width: "100%", height: "100%" }}
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="reel_wrapper">
            <video
              src={video10}
              controls
              style={{ width: "100%", height: "100%" }}
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
