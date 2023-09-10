import React from "react";
import "../styles/Background.css";
import "../styles/Navbar.css";
import "../styles/InfoMe.css";
import "../styles/Footer.css";
import ImageWithConfetti from "./Confetti";
import Navbar from "./Navbar";
import InfoMe from "./InfoMe";
import HeroSection from "./Image";
import SocialIcons from "./SocialIcons";

const Background = () => {
  return (
    <div className="container">
      <img
        src="https://images.wallpaperscraft.ru/image/single/doroga_razmetka_pasmurno_124093_1920x1080.jpg"
        alt=""
      />
      <div class="slider-wrapper">
        I`am
        <div class="slider">
          <div class="slider-text-1">Samagan Zhumabekov</div>
          <div class="slider-text-2">Web-Developer</div>
          <div class="slider-text-3">Web-Designer </div>
          <div class="slider-text-4">Web-Doogy</div>
        </div>
      </div>
      <ImageWithConfetti />
      <Navbar />
      <InfoMe />
      <HeroSection />
      <SocialIcons />
    </div>
  );
};

export default Background;
