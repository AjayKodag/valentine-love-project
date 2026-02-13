import { useEffect } from "react";

export default function PetalRain() {
  useEffect(() => {
    const interval = setInterval(() => {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.innerText = "🌸";

      petal.style.left = Math.random() * window.innerWidth + "px";
      petal.style.animationDuration = 4 + Math.random() * 3 + "s";

      document.body.appendChild(petal);

      setTimeout(() => petal.remove(), 7000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
}
