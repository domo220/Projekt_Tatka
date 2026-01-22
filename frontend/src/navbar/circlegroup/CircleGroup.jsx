import { useState, useEffect } from "react";
import "./bubble.css";
import { Circle } from "./Circle";
import image1 from "./DSCF0006.jpg";
import image2 from "./DSC_6187.jpg";
import image3 from "./DSC_6261.jpg";
import image4 from "./DSC_6256.jpg";
import image5 from "./DSCF0051.jpg";

function CircleGroup({ setImage }) {
  const images = [image1, image2, image3, image4, image5];
  const [activeIndex, setActiveIndex] = useState(0);

  const nextStep = () => {
    const newIndex = (activeIndex + 1) % images.length;
    setActiveIndex(newIndex);
    setImage(images[newIndex]);
  };

  const handleClick = (index) => {
    setActiveIndex(index);
    setImage(images[index]);
  };

  useEffect(() => {
    const interval = setInterval(nextStep, 10000); // 10 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [activeIndex]); // Effect runs when activeIndex changes

  return (
    <div className="circlegroup">
      {images.map((_, i) => (
        <Circle
          key={i}
          isActive={i === activeIndex}
          onClick={() => handleClick(i)}
        />
      ))}
    </div>
  );
}

export default CircleGroup;
