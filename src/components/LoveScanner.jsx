import { useState, useEffect } from "react";

export default function LoveScanner({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < 100) {
        i++;
        setProgress(i);
      } else {
        clearInterval(interval);
        setDone(true);

        // ❤️ Heartbeat vibration on mobile
        if (navigator.vibrate) {
          navigator.vibrate([150, 80, 150]);
        }

        // Delay before going to Love Letter
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 2200); // 2.2 second emotional pause
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scanner-box fade-in-big">
      <h2>Scanning Sneha’s heart… ❤️</h2>

      <div className="scanner-bar">
        <div
          className="scanner-progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {done && (
        <p className="scanner-result upgraded-scanner-text">
          100% love detected for Ajay 💖
        </p>
      )}

      {/* Floating hearts animation */}
      {done && <div className="floating-heart-container"></div>}
    </div>
  );
}
