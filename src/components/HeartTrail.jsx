import { useEffect } from "react";

export default function HeartTrail() {
  useEffect(() => {
    const createHeart = (e) => {
      const heart = document.createElement("div");
      heart.className = "cursor-heart";
      heart.style.left = e.pageX + "px";
      heart.style.top = e.pageY + "px";
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 800);
    };

    window.addEventListener("mousemove", createHeart);
    return () => window.removeEventListener("mousemove", createHeart);
  }, []);

  return null;
}
