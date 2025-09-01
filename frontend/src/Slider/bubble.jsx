import { useState, useEffect } from "react";
import "./bubble.css";
import image1 from "./DSCF0006.jpg";
import image2 from "./DSC_6187.jpg";
import image3 from "./DSC_6261.jpg";
import image4 from "./DSC_6256.jpg";
import image5 from "./DSCF0051.jpg";

function Circle({ isBlack, onClick }) {
  return (
    <div
      className={`circle ${isBlack ? "black" : "white"}`}
      onClick={onClick}
    ></div>
  );
}

function CircleGroup({ setImage }) {
  const [circles, setCircles] = useState([true, false, false, false, false]);

  const nextStep = () => {
    if (circles[0]) {
      setCircles([false, true, false, false, false]);
      setImage(image2);
    } else if (circles[1]) {
      setCircles([false, false, true, false, false]);
      setImage(image3);
    } else if (circles[2]) {
      setCircles([false, false, false, true, false]);
      setImage(image4);
    } else if (circles[3]) {
      setCircles([false, false, false, false, true]);
      setImage(image5);
    } else if (circles[4]) {
      setCircles([true, false, false, false, false]);
      setImage(image1);
    }
  };

  function handleClick(index) {
    if (index === 0) {
      setCircles([true, false, false, false, false]);
      setImage(image1);
    } else if (index === 1) {
      setCircles([false, true, false, false, false]);
      setImage(image2);
    } else if (index === 2) {
      setCircles([false, false, true, false, false]);
      setImage(image3);
    } else if (index === 3) {
      setCircles([false, false, false, true, false]);
      setImage(image4);
    } else if (index === 4) {
      setCircles([false, false, false, false, true]);
      setImage(image5);
    }
  }

  useEffect(() => {
    const interval = setInterval(nextStep, 10000); // 10000 ms = 10 sekund
    return () => clearInterval(interval); // cleanup při odmountu
  }, [circles]); // efekt se spouští při každé změně circles

  return (
    <div className="circlegroup">
      {circles.map((isBlack, i) => (
        <Circle key={i} isBlack={isBlack} onClick={() => handleClick(i)} />
      ))}
    </div>
  );
}

export default CircleGroup;
