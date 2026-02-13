import { useState, useEffect } from "react";

export default function TypingName() {
  const text = "Sneha ❤️";
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        setDisplay((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 150);

    return () => clearInterval(typing);
  }, []);

  return <h1 className="typing-name">{display}</h1>;
}
