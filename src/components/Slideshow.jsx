import { useState, useEffect } from "react";

// Automatically import all images from assets folder
const images = Object.values(
  import.meta.glob("../assets/*.{jpg,jpeg,png}", { eager: true })
).map((mod) => mod.default);

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(slide);
  }, []);

  return (
    <img
      src={images[index]}
      className="slideshow-img"
      alt="Love memory"
    />
  );
}
