import { useRef, useState } from "react";

export default function StudioVideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoToggle = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-full flex justify-center py-20 bg-black">
      <div className="w-[90%] md:w-[70%] lg:w-[60%] rounded-2xl overflow-hidden shadow-2xl relative border border-gray-700">

        {/* Video */}
        <video
          ref={videoRef}
          className="w-full h-auto"
          src="/Video/herovideo.mp4"   // ← yaha apna video path daalna
          controls={false}
        />

        {/* Overlay Play Button */}
        <button
          onClick={handleVideoToggle}
          className="absolute bottom-5 right-5 bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-xl border border-white hover:bg-white/30 transition"
        >
          {isPlaying ? "Pause Video" : "Play Video"}
        </button>

      </div>
    </div>
  );
}
