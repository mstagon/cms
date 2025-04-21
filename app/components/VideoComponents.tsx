"use client";

const VideoComponent = () => {
  return (
    <video
      autoPlay
      playsInline
      loop
      muted
      width={"100%"}
      height={"100%"}
      preload="none"
      src="/background1.mp4"
      style={{
        objectFit: "cover",
      }}
    />
  );
};

export default VideoComponent;
