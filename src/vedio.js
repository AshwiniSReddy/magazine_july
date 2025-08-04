

import React, { useEffect, useRef, useState } from "react";
import "./InstagramLikeVideoScroll.css";


import bg1 from "./images/1.jpg";
import bg2 from "./images/2.jpg";
import bg3 from "./images/3.jpg";
import bg4 from "./images/4.jpg";
import bg5 from "./images/5.jpg";
import bg6 from "./images/6.jpg";

import bg7 from "./images/7.jpg";
import bg8 from "./images/8.jpg";
import bg9 from "./images/9.jpg";
import bg10 from "./images/10.jpg";
import bg11 from "./images/11.jpg";
import bg12 from "./images/12.jpg";

import bg13 from "./images/13.jpg";
import bg14 from "./images/14.jpg";
import bg15 from "./images/15.jpg";
import bg16 from "./images/16.jpg";
import bg17 from "./images/17.jpg";
import bg18 from "./images/18.jpg";

import bg19 from "./images/19.jpg";
import bg20 from "./images/20.jpg";
import bg21 from "./images/21.jpg";
import bg22 from "./images/22.jpg";
import bg23 from "./images/23.jpg";
import bg24 from "./images/24.jpg";
import bg25 from "./images/25.jpg";
import bg26 from "./images/26.jpg";
import bg27 from "./images/27.jpg";
// import bg28 from "./images/abc.jpg";


const videoList = ["https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/1.mp4", "https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/2.mp4", "https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/2e.mp4", "https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/3.mp4", "https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/4.mp4", "https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/5.mp4","https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/6.mp4","https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/7.mp4","https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/8.mp4","https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/9.mp4","https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/10.mp4",
  "https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/11.mp4","https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/12.mp4","https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/13.mp4","https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/14.mp4","https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/15.mp4","https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/16.mp4","https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/17.mp4","https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/18.mp4","https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/19.mp4","https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/20.mp4","https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/21.mp4","https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/22.mp4","https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/23.mp4",
  "https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/24.mp4","https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/25.mp4","https://livescience.s3.ap-south-1.amazonaws.com/vedios/vedios/26l.mp4"

];
const bgList = [bg1, bg2, bg3, bg4, bg5, bg6,bg7,bg8,bg9,bg10,bg11,bg12,bg13,bg14,bg15,
  bg16,bg17,bg18,bg19,bg20,bg21,bg22,bg23,bg24,bg25,bg26,bg27
];

export default function InstagramReelSinglePlayer() {
  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [allowScroll, setAllowScroll] = useState(false);

  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

  useEffect(() => {
    document.body.style.overflow = allowScroll ? "auto" : "hidden";
    if (!allowScroll) window.scrollTo(0, 0);
  }, [allowScroll]);

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === currentIndex) {
          video.muted = isMuted;
          video.play().catch((e) => console.warn("Play blocked:", e));
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentIndex, isMuted]);

  const handleUnmute = () => {
    setIsMuted(false);
    setAllowScroll(true);
  };

  const scrollToIndex = (index) => {
    if (containerRef.current) {
      const topOffset = index * window.innerHeight;
      containerRef.current.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (!allowScroll) return;
    const newIndex = Math.round(containerRef.current.scrollTop / window.innerHeight);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div
      ref={containerRef}
      className="reelContainerScrollable"
      onScroll={handleScroll}
    >
      {videoList.map((src, idx) => (
        <div className="reelSlide" key={idx}>
          <div
            className="backgroundImage"
            style={{
              backgroundImage: `url(${bgList[idx]})`,
              filter: "blur(16px)",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
          <video
            ref={(el) => (videoRefs.current[idx] = el)}
            className="reelVideo"
            src={src}
            loop
            playsInline
            autoPlay
            preload="auto"
            muted={isMuted}
            style={{ zIndex: 1, position: "relative" }}
          />
        </div>
      ))}

      {!allowScroll && (
        <div className="instructionDialog">
          <div className="instructionText">
            Welcome! To begin watching reels, please tap the button below to unmute and start.
          </div>
          <div>
            <button className="unmuteButton" onClick={handleUnmute}>
            Ok
          </button>
          </div>
          
        </div>
      )}
    </div>
  );
}

