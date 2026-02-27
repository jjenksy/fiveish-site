"use client";

import { useRef, useState } from "react";

export function GameplayVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleMute() {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  }

  return (
    <div className="relative rounded-2xl overflow-hidden border border-bg-card">
      <video
        ref={videoRef}
        src="/5ish-gameplay.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full"
      />
      <button
        onClick={toggleMute}
        className="absolute bottom-3 right-3 bg-bg-deep/70 backdrop-blur text-text-main text-xs px-3 py-1.5 rounded-lg hover:bg-bg-deep/90 transition-colors"
      >
        {muted ? "Unmute" : "Mute"}
      </button>
    </div>
  );
}
