import { useRef } from "react";

export default function RotateProduct({ image }) {
  const imgRef = useRef(null);
  let isDragging = false;
  let startX = 0;
  let rotation = 0;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    rotation += diff * 0.3;
    imgRef.current.style.transform = `rotateY(${rotation}deg)`;
    startX = e.clientX;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  return (
    <img
      ref={imgRef}
      src={image}
      alt="product"
      className="w-full h-full object-contain cursor-pointer select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    />
  );
}
