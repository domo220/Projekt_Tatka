import { useState, useEffect } from "react";
import "./navbar.css";
import CircleGroup from "./circlegroup/CircleGroup";
import image1 from "./circlegroup/DSCF0006.jpg";

function Navbar_final() {
  return (
    <div className="navbar_final">
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

function Navbar() {
  const [image, setImage] = useState(image1);
  return (
    <div className="navbar">
      <Navbar_final />
      <img src={image} alt="Hero" className="background-img" />
      <CircleGroup setImage={setImage} />
    </div>
  );
}
export default Navbar;
