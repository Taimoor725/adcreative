// components/PulseAnimation.js
"use client"; // Only needed if you're using the app router in Next.js

import { useState, useRef } from "react";

export default function PulseAnimation() {
  const [isAnimating, setIsAnimating] = useState(false); // State to control animation
  const animatedPaths = useRef(null); // Ref for SVG paths

  const handleAnimation = () => {
    setIsAnimating(true); // Start animation

    // Stop animation automatically after 5 seconds
    setTimeout(() => setIsAnimating(false), 5000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* SVG Animation */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 166.52 32.548"
        className="w-80 h-20"
      >
        <g id="Group_27402" data-name="Group 27402" transform="translate(0.5)">
          {/* Static Background Paths */}
          <path
            d="M5.5,32.547V24.663a9.806,9.806,0,0,1,9.714-9.895H74.306A9.806,9.806,0,0,0,84.02,4.874V0"
            transform="translate(-5.5)"
            fill="none"
            stroke="#cbb3bf"
            strokeWidth="1"
            opacity="0.5"
          />
          <path
            d="M84.02,32.547V24.663a9.805,9.805,0,0,0-9.714-9.895H15.214A9.805,9.805,0,0,1,5.5,4.874V0"
            transform="translate(81.5)"
            fill="none"
            stroke="#cbb3bf"
            strokeWidth="1"
            opacity="0.5"
          />

          {/* Pulsing Paths with Conditional Animation */}
          <path
            ref={animatedPaths}
            d="M84.02,32.547V24.663a9.805,9.805,0,0,0-9.714-9.895H15.214A9.805,9.805,0,0,1,5.5,4.874V0"
            transform="translate(81.5)"
            fill="none"
            stroke="#ef2b70"
            strokeWidth="1"
            strokeDasharray="15px 9999px"
            className={`${isAnimating ? "animate-pulse-stroke" : ""}`}
          />
          <path
            ref={animatedPaths}
            d="M5.5,32.547V24.663a9.806,9.806,0,0,1,9.714-9.895H74.306A9.806,9.806,0,0,0,84.02,4.874V0"
            transform="translate(-5.5)"
            fill="none"
            stroke="#ef2b70"
            strokeWidth="1"
            strokeDasharray="15px 9999px"
            className={`${isAnimating ? "animate-pulse-stroke" : ""}`}
          />
        </g>
      </svg>

      {/* Button to Start Animation */}
      <button
        onClick={handleAnimation}
        className="mt-8 px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition duration-300"
      >
        {isAnimating ? "Animating..." : "Start Animation"}
      </button>
    </div>
  );
}
