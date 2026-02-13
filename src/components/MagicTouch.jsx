import { useState, useEffect } from "react";

export default function MagicTouch() {
  const [showHeart, setShowHeart] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [message, setMessage] = useState("");

  const messages = [
    "Sneha… Ajay loves you more every second ❤️",
    "Your touch feels like magic ✨",
    "Sneha, you make Ajay's world beautiful 💖",
    "Every moment with you is special ❤️",
    "Your smile is Ajay’s favourite place 💞",
    "Ajay loves you endlessly 💗"
  ];

  useEffect(() => {
    let timeout;

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      setPos({ x: touch.clientX, y: touch.clientY });
      
      setMessage(messages[Math.floor(Math.random() * messages.length)]);
      setShowHeart(true);

      // Vibrate softly on touch
      if (navigator.vibrate) {
        navigator.vibrate([60, 40, 60]);
      }

      timeout = setTimeout(() => {
        setShowHeart(false);
      }, 2200);
    };

    const handleTouchEnd = () => {
      setShowHeart(false);
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {showHeart && (
        <div
          className="magic-heart"
          style={{
            top: pos.y,
            left: pos.x,
          }}
        >
          ❤️
          <div className="magic-message">{message}</div>
        </div>
      )}
    </>
  );
}
