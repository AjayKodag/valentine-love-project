import { useState, useEffect, useRef } from "react";

export default function Signature({ onComplete }) {
  const signature = "Yours forever,\nAjay ❤️";
  const [text, setText] = useState("");
  const containerRef = useRef(null);

  const speed = 90;

  useEffect(() => {
    let i = 0;

    // ❤️ Vibrate phone when signature starts (mobile only)
    if (window.navigator.vibrate) {
      navigator.vibrate([120, 80, 120]);
    }

    const write = setInterval(() => {
      if (i < signature.length) {
        setText(signature.slice(0, i));
        i++;

        // 👉 Auto-scroll every time a new letter appears
        if (containerRef.current) {
          containerRef.current.scrollIntoView({
            behavior: "smooth",
            block: "end"
          });
        }

      } else {
        clearInterval(write);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(write);
  }, []);

  return (
    <div ref={containerRef}>
      <pre className="signature-text fade-in-big handwritten">
        {text}
      </pre>
    </div>
  );
}
