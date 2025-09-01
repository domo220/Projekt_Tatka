import { useState, useEffect } from "react";
import "./navbar.css";
import CircleGroup from "../Slider/bubble";
import image1 from "../Slider/DSCF0006.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="Name">
        <label> Komfortní podlahy</label>
      </div>
      <div className="Design">
        <label> Designové podlahy do bytové výstavby</label>
      </div>
      <div className="Design">
        <label> Prumyslové designové podlahy</label>
      </div>
      <div className="Kontakt">
        <label> Kontakt</label>
      </div>
    </div>
  );
}

function Slider() {
  const [image, setImage] = useState(image1);
  return (
    <div className="slider">
      <Navbar />
      <img src={image} alt="Hero" className="background-img" />
      <CircleGroup setImage={setImage} />
    </div>
  );
}
export default Slider;
