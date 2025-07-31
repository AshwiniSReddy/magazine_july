// // InstagramLikeVideoScroll.jsx
// import React, { useRef, useEffect, useState } from "react";
// import "./InstagramLikeVideoScroll.css";
// import video1 from "./vedios/1.mp4";
// // import video2 from "./vedios/random-tabla-beats-by-newbie-370.mp4";
// import video2 from "./vedios/2.mp4";
// import video3 from "./vedios/3.mp4";
// import video4 from "./vedios/4.mp4";
// import video5 from "./vedios/5.mp4";
// import video6 from "./vedios/6.mp4";


// // Sample video sources
// const videos = [video1, video2,video3,video4,video5,video6];

// // Individual video card with auto-play/pause on view
// // const VideoCard = ({ src }) => {
// //   const videoRef = useRef(null);

// //   useEffect(() => {
// //     console.log("plaing")
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           videoRef.current.play().catch((e) => console.warn('Auto-play prevented:', e));
// //         } else {
// //           videoRef.current.pause();
// //         }
// //       },
// //       { threshold: 0.75 }
// //     );

// //     if (videoRef.current) {
// //       observer.observe(videoRef.current);
// //     }
// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <div className="videoContainer">
// //       <video
// //         ref={videoRef}
// //         src={src}
// //         className="video"

// //         loop
// //         playsInline
// //         autoPlay
// //         preload="auto"
// //       />
// //     </div>
// //   );
// // };

// // const VideoCard = ({ src, index, allowScroll, setAllowScroll }) => {
// //   const videoRef = useRef(null);
// //   const [isMuted, setIsMuted] = React.useState(index === 0); // Only mute first video

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           videoRef.current
// //             .play()
// //             .catch((e) => console.warn("Auto-play prevented:", e));
// //         } else {
// //           videoRef.current.pause();
// //         }
// //       },
// //       { threshold: 0.75 }
// //     );

// //     if (videoRef.current) {
// //       observer.observe(videoRef.current);
// //     }

// //     return () => observer.disconnect();
// //   }, []);
// //   useEffect(() => {
// //   const setVH = () => {
// //     const vh = window.innerHeight * 0.01;
// //     document.documentElement.style.setProperty('--vh', `${vh}px`);
// //   };
// //   setVH();
// //   window.addEventListener('resize', setVH);
// //   return () => window.removeEventListener('resize', setVH);
// // }, []);


// //  const handleUnmute = () => {
// //   setIsMuted(false);
// //   if (videoRef.current) {
// //     videoRef.current.muted = false;
// //     videoRef.current.play();
// //   }
// //   setAllowScroll(true); // ← unlocks scroll!
// // };


// //   return (
// //     <div className="videoContainer">
// //       <video
// //         ref={videoRef}
// //         src={src}
// //         className="video"
// //         muted={isMuted}
// //         loop
// //         playsInline
// //         autoPlay
// //         preload="auto"
// //       />
// //       {index === 0 && isMuted && (
// //         <button className="unmuteButton" onClick={handleUnmute}>
// //           ▶️ Tap to unmute
// //         </button>
// //       )}
// //     </div>
// //   );
// // };
// const VideoCard = ({ src, index, allowScroll, setAllowScroll }) => {
//   const videoRef = useRef(null);
//   const [isMuted, setIsMuted] = useState(index === 0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           videoRef.current?.play().catch((e) =>
//             console.warn("Autoplay prevented:", e)
//           );
//         } else {
//           videoRef.current?.pause();
//         }
//       },
//       { threshold: 0.75 }
//     );

//     if (videoRef.current) observer.observe(videoRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const handleUnmute = () => {
//     setIsMuted(false);
//     if (videoRef.current) {
//       videoRef.current.muted = false;
//       videoRef.current.play();
//     }
//     setAllowScroll(true); // Unlock scroll after tap
//   };

//   return (
//     <div className="videoContainer">
//       <video
//         ref={videoRef}
//         src={src}
//         className="video"
//         muted={isMuted}
//         loop
//         playsInline
//         autoPlay
//         preload="auto"
//       />
//       {index === 0 && isMuted && (
//         <button className="unmuteButton" onClick={handleUnmute}>
//           ▶️ Tap to unmute
//         </button>
//       )}
//     </div>
//   );
// };


// // Main feed component
// // export default function InstagramLikeVideoScroll() {
// //   return (
// //     <div className="feedContainer">
// //       {videos.map((src, idx) => (
// //         <VideoCard key={idx} src={src} index={idx} />
// //       ))}
// //     </div>
// //   );
// // }

// export default function InstagramLikeVideoScroll() {
//   const [allowScroll, setAllowScroll] = useState(false);

//   useEffect(() => {
//     // Disable body scroll when allowScroll is false
//     document.body.style.overflow = allowScroll ? 'auto' : 'hidden';
//   }, [allowScroll]);

  

//   return (
//     <div className={`feedContainer ${allowScroll ? '' : 'no-scroll'}`}>
//       {/* Block scroll until user taps unmute */}
//       {!allowScroll && <div className="scrollBlocker" />}

//       {videos.map((src, idx) => (
//         <VideoCard
//           key={idx}
//           src={src}
//           index={idx}
//           allowScroll={allowScroll}
//           setAllowScroll={setAllowScroll}
//         />
//       ))}
//     </div>
//   );
// }


// import React, { useEffect, useRef, useState } from "react";
// import "./InstagramLikeVideoScroll.css";
// import video1 from "./vedios/1.mp4";
// import video2 from "./vedios/2.mp4";
// import video3 from "./vedios/3.mp4";
// import video4 from "./vedios/4.mp4";
// import video5 from "./vedios/5.mp4";
// import video6 from "./vedios/6.mp4";

// export default function InstagramReelSinglePlayer() {
//   const videoRef = useRef(null);
//   const containerRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMuted, setIsMuted] = useState(true);
//   const [allowScroll, setAllowScroll] = useState(false);

//   const videos = [video1, video2, video3, video4, video5, video6];

//   // Set iPhone-safe vh unit
//   useEffect(() => {
//     const setVH = () => {
//       const vh = window.innerHeight * 0.01;
//       document.documentElement.style.setProperty("--vh", `${vh}px`);
//     };
//     setVH();
//     window.addEventListener("resize", setVH);
//     return () => window.removeEventListener("resize", setVH);
//   }, []);

//   // Scroll lock
//   useEffect(() => {
//     document.body.style.overflow = allowScroll ? "auto" : "hidden";
//     if (!allowScroll) window.scrollTo(0, 0);
//   }, [allowScroll]);

//   // Play new video on index change
//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.classList.add("fadeOut");
//       setTimeout(() => {
//         videoRef.current.src = videos[currentIndex];
//         videoRef.current.muted = isMuted;
//         videoRef.current.play().catch((e) => console.warn("Autoplay blocked:", e));
//         videoRef.current.classList.remove("fadeOut");
//       }, 200);
//     }
//   }, [currentIndex, isMuted]);

//   const handleUnmute = () => {
//     setIsMuted(false);
//     setAllowScroll(true);
//   };

//   // Mouse scroll
//   const handleWheel = (e) => {
//     if (!allowScroll) return;
//     if (e.deltaY > 50 && currentIndex < videos.length - 1) {
//       setCurrentIndex((prev) => prev + 1);
//     } else if (e.deltaY < -50 && currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//     }
//   };

//   // Touch scroll
//   let touchStartY = 0;
//   const handleTouchStart = (e) => {
//     touchStartY = e.touches[0].clientY;
//   };
//   const handleTouchEnd = (e) => {
//     const touchEndY = e.changedTouches[0].clientY;
//     const deltaY = touchStartY - touchEndY;

//     if (deltaY > 50 && currentIndex < videos.length - 1) {
//       setCurrentIndex((prev) => prev + 1);
//     } else if (deltaY < -50 && currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//     }
//   };

//   return (
//     <div
//       className="reelContainer"
//       ref={containerRef}
//       onWheel={handleWheel}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//     >
//       <video
//         ref={videoRef}
//         className="reelVideo"
//         loop
//         playsInline
//         autoPlay
//         preload="auto"
//         muted={isMuted}
//       />

//       {!allowScroll && (
//         <button className="unmuteButton" onClick={handleUnmute}>
//           ▶️ Tap to unmute
//         </button>
//       )}
//     </div>
//   );
// }


import React, { useEffect, useRef, useState } from "react";
import "./InstagramLikeVideoScroll.css";

// Import all your 24+ videos
import video1 from "./vedios/1.mp4";
import video2 from "./vedios/2.mp4";
import video3 from "./vedios/3.mp4";
import video4 from "./vedios/4.mp4";
import video5 from "./vedios/5.mp4";
import video6 from "./vedios/6.mp4";
// ... import the rest (up to 24)

const videoList = [
  video1, video2, video3, video4, video5, video6,
  // add others up to 24
];

export default function InstagramReelSinglePlayer() {
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [allowScroll, setAllowScroll] = useState(false);
  const [videoCache, setVideoCache] = useState({});

  // Set iPhone-safe vh unit
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = allowScroll ? "auto" : "hidden";
    if (!allowScroll) window.scrollTo(0, 0);
  }, [allowScroll]);

  // 🔄 Load current/prev/next videos only
  useEffect(() => {
    const loadVideo = (index) => {
      return fetch(videoList[index])
        .then(res => res.blob())
        .then(blob => URL.createObjectURL(blob));
    };

    const preloadVideos = async () => {
      const cache = {};
      if (videoList[currentIndex]) {
        cache[currentIndex] = await loadVideo(currentIndex);
      }
      if (videoList[currentIndex + 1]) {
        cache[currentIndex + 1] = await loadVideo(currentIndex + 1);
      }
      if (videoList[currentIndex - 1]) {
        cache[currentIndex - 1] = await loadVideo(currentIndex - 1);
      }
      setVideoCache(cache);
    };

    preloadVideos();
  }, [currentIndex]);

  // 🔁 Play current video on change
  useEffect(() => {
    if (videoRef.current && videoCache[currentIndex]) {
      videoRef.current.classList.add("fadeOut");

      setTimeout(() => {
        videoRef.current.src = videoCache[currentIndex];
        videoRef.current.muted = isMuted;
        videoRef.current.play().catch((e) => console.warn("Autoplay blocked:", e));
        videoRef.current.classList.remove("fadeOut");
      }, 200);
    }
  }, [currentIndex, isMuted, videoCache]);

  const handleUnmute = () => {
    setIsMuted(false);
    setAllowScroll(true);
  };

  // Scroll (mouse)
  const handleWheel = (e) => {
    if (!allowScroll) return;
    if (e.deltaY > 50 && currentIndex < videoList.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (e.deltaY < -50 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Touch (mobile)
  let touchStartY = 0;
  const handleTouchStart = (e) => {
    touchStartY = e.touches[0].clientY;
  };
  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY - touchEndY;
    if (deltaY > 50 && currentIndex < videoList.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (deltaY < -50 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div
      className="reelContainer"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <video
        ref={videoRef}
        className="reelVideo"
        loop
        playsInline
        autoPlay
        preload="auto"
        muted={isMuted}
      />

      {!allowScroll && (
        <button className="unmuteButton" onClick={handleUnmute}>
          ▶️ Tap to unmute
        </button>
      )}
    </div>
  );
}

