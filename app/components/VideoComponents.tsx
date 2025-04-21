"use client";

const VideoComponent = () => {
    return (
        <video
            autoPlay
            playsInline
            loop
            muted
            preload="none"
            src="/background1.mp4"
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }}
        />
    );
};

export default VideoComponent;