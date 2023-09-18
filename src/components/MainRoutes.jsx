import React from "react";
import HeroSection from "./Image";
import SocialIcons from "./SocialIcons";
import { Route, Routes } from "react-router-dom";
import Background from "./Background";
import InfoMe from "./InfoMe";
import ImageWithConfetti from "./Confetti";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Background />} />
        <Route path="/hero" element={<HeroSection />} />
        <Route path="/follow" element={<SocialIcons />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
