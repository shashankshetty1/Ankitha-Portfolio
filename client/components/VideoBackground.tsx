import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  "https://videos.pexels.com/video-files/3191572/3191572-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/35010179/14831281_360_640_30fps.mp4"
];

export default function VideoBackground() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 10000); // Transition every 10 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={videos[currentVideoIndex]}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 0.4, scale: 1.1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 2 },
            scale: { duration: 10, ease: "linear" } 
          }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videos[currentVideoIndex]} type="video/mp4" />
          </video>
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />
    </div>
  );
}
