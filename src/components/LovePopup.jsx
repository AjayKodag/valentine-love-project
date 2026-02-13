import { useEffect } from "react";

export default function LovePopup() {
  useEffect(() => {
    const messages = [
      "Ajay ❤️ Sneha",
      "You make him smile",
      "Sneha is special",
      "Ajay loves you a lot",
      "Perfect together 💖",
      "Forever starts here ❤️"
    ];

    const showPopup = () => {
      const popup = document.createElement("div");
      popup.className = "love-popup";
      popup.textContent = messages[Math.floor(Math.random() * messages.length)];

      popup.style.left = Math.random() * window.innerWidth + "px";
      popup.style.top = Math.random() * window.innerHeight + "px";

      document.body.appendChild(popup);

      setTimeout(() => popup.remove(), 3000);
    };

    const interval = setInterval(showPopup, 4000);
    return () => clearInterval(interval);
  }, []);

  return null;
}
