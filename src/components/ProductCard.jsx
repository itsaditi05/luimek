import React, { useState } from "react";

export default function RotateProduct({ image }) {
  const [rotation, setRotation] = useState(0);

  const handleDrag = (e) => {
    if (e.movementX !== 0) {
      setRotation((prev) => prev + e.movementX * 0.5);
    }
  };

  return (
    <div
      onMouseMove={handleDrag}
      className="w-full h-64 bg-black flex items-center justify-center rounded-xl cursor-grab active:cursor-grabbing"
      style={{
        perspective: "900px"
      }}
    >
      <img
        src={image}
        alt="product"
        className="h-full object-contain select-none"
        style={{
          transform: `rotateY(${rotation}deg)`,
          transition: "transform 0.05s linear"
        }}
        draggable="false"
      />
    </div>
  );
}
