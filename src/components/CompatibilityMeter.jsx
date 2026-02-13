import { useState, useEffect } from "react";

export default function CompatibilityMeter({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const cuteMessages = [
    "Analyzing heartbeat match… 💓",
    "Comparing smiles… 😊",
    "Measuring cuteness level… 💖",
    "Checking emotional sync… 💞",
    "Calculating soulmate energy… ✨",
    "Finalizing results… ❤️"
  ];

  useEffect(() => {
    // message changer
    const msgInterval = setInterval(() => {
      setMessageIndex((prev) =>
        prev < cuteMessages.length - 1 ? prev + 1 : prev
      );
    }, 1200);

    // progress bar
    let p = 0;
    const progressInterval = setInterval(() => {
      if (p < 100) {
        p++;
        setProgress(p);
      } else {
        clearInterval(progressInterval);
        clearInterval(msgInterval);

        // sweet delay before moving on
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 2000);
      }
    }, 45);

    return () => {
      clearInterval(progressInterval);
      clearInterval(msgInterval);
    };
  }, []);

  return (
    <div className="compat-box fade-in-big">
      <h2 className="compat-title">Sneha ❤️ Ajay Compatibility Test</h2>

      <p className="compat-msg">{cuteMessages[messageIndex]}</p>

      <div className="compat-bar">
        <div
          className="compat-progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {progress === 100 && (
        <p className="compat-final glow-text">
          99.9% Soulmate Match Detected 💖💍
        </p>
      )}
    </div>
  );
}
