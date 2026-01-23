import { useState } from "react";
import "./navbar.css";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import CircleGroup from "./circlegroup/CircleGroup";
import image1 from "./circlegroup/DSCF0006.jpg";

function Navbar_final() {
  // 1. Stav: false = zavřeno, true = otevřeno
  const [isOpen, setIsOpen] = useState(false);

  // Funkce pro přepínání
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar_final">
      {/* LOGO */}
      <div className="logo-container">
        <span className="logo_text_top">KOMFORTNÍ</span>
        <span className="logo_text_bottom">PODLAHY</span>
      </div>
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <div className="Design">
          <label>Designové podlahy</label>
        </div>
        <div className="Design">
          <label>Průmyslové podlahy</label>
        </div>
        <div className="Kontakt">
          <label>Kontakt</label>
        </div>
      </div>

      {/* 2. HAMBURGER IKONA (Viditelná jen na mobilu) */}
      <div className="hamburger" onClick={toggleMenu}>
        {/* Pokud je otevřeno, ukáže křížek, jinak čárky */}
        {isOpen ? <CloseOutlined /> : <MenuOutlined />}
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
