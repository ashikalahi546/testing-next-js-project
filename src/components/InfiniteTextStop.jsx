"use client";
import { useState } from "react";
const InfiniteTextStop = () => {
  const [isPaused, setIsPaused] = useState(false);
  const handleMouseEnter = () => {
    setIsPaused(true);
  };
  const handleMouseLeave = () => {
    setIsPaused(false);
  };
  
  return (
    <div className="bg-gray-100 py-10 overflow-hidden">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`infinite-animition-two ${isPaused ? "paused" : ""}`}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti
          praesentium voluptatum, dolores eveniet expedita eligendi nobis
          laudantium debitis eos sed optio blanditiis fugiat dolor quia velit.
          A, nulla labore.
        </p>
      </div>
    </div>
  );
};

export default InfiniteTextStop;
