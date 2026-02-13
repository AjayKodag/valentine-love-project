import { useState, useEffect, useRef } from "react";

export default function LoveLetter({ onComplete }) {
  const sentences = [
     "Dear Sneha,",
  "",
  "From the moment I met you, my heart felt something beautiful begin.",
  "Your smile, your presence… everything about you feels magical to me.",
  "",
  "You bring light to my every moment, warmth to my every day,",
  "and happiness to every breath I take.",
  "",
  "I love you deeply, truly, endlessly.",
  "",
  "Forever yours,",
  "Ajay ❤️"
  ];

  const [visibleSentences, setVisibleSentences] = useState([]);
  const delayBetweenSentences = 1400;

  // 🔥 Reference to auto-scroll smoothly
  const containerRef = useRef(null);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < sentences.length) {
        setVisibleSentences((prev) => [...prev, sentences[index]]);
        index++;

        // ❤️ Auto scroll after sentence appears
        setTimeout(() => {
          containerRef.current?.scrollIntoView({
            behavior: "smooth", 
            block: "end"
          });
        }, 100);
      } else {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, delayBetweenSentences);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="love-letter-container fade-in-big">
      {visibleSentences.map((line, i) => (
        <p key={i} className="sentence fade-sentence">
          {line}
        </p>
      ))}
    </div>
  );
}
