import React, { useEffect } from "react";

function ImageWithConfetti() {
  useEffect(() => {
    const animationEnd = Date.now() + Infinity; // Продолжительность анимации в миллисекундах

    const createConfetti = () => {
      const confetti = document.createElement("div");
      confetti.className = "confetti";

      confetti.style.left = `${Math.random() * window.innerWidth}px`;
      confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;

      document.body.append(confetti);

      confetti.addEventListener("animationend", () => {
        confetti.remove();
      });
    };

    const confettiInterval = setInterval(createConfetti, 40);

    setTimeout(() => {
      clearInterval(confettiInterval);
    }, 50000);

    return () => {
      clearInterval(confettiInterval);
    };
  }, []);

  return <div className="image-container"></div>;
}

export default ImageWithConfetti;
