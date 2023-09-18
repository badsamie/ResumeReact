import React from "react";
import "../styles/Background.css";
import "../styles/Navbar.css";
import "../styles/InfoMe.css";
import "../styles/Footer.css";
import ImageWithConfetti from "./Confetti";

const Background = () => {
  return (
    <div className="container">
      <img
        src="https://images.wallpaperscraft.ru/image/single/doroga_razmetka_pasmurno_124093_1920x1080.jpg"
        alt=""
      />
      <div className="slider-wrapper">
        I`am
        <div className="slider">
          <div className="slider-text-1">Samagan Zhumabekov</div>
          <div className="slider-text-2">Web-Developer</div>
          <div className="slider-text-3">Web-Designer </div>
          <div className="slider-text-4">Web-Doogy</div>
        </div>
      </div>
      <ImageWithConfetti />
    </div>
  );
};

export default Background;
