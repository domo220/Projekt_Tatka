
import { useState, useEffect } from "react";
import './bubble.css';

function Circle() {
    const [isBlack, setIsBlack] = useState(false);
  
    return (
      <div
        className={`circle ${isBlack ? "black" : "white"}`}
        onClick={() => setIsBlack(!isBlack)}
      ></div>

      
    );
  }

  function CircleGroup () {
    const [circles, setCircles] = useState ([true, false, false])

    function handleClick (index) {
        let newCircles = [true, false, false];
        if (index === 1) {
            
        }

    }

  }
  
  export default Circle;