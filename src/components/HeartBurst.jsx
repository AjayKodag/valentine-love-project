import { useEffect } from "react";

export default function HeartBurst() {
  useEffect(() => {
    for (let i = 0; i < 15; i++) {
      const heart = document.createElement("div");
      heart.className = "burst-heart";
      heart.innerText = "💖";

      heart.style.left = "50%";
      heart.style.top = "50%";

      heart.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
      heart.style.animationDelay = i * 0.05 + "s";

      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 1500);
    }
  }, []);

  return null;
}
