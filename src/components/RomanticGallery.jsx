import { useState } from "react";

const images = Object.values(
  import.meta.glob("../assets/*.{jpg,jpeg,png}", { eager: true })
).map((mod) => mod.default);

export default function RomanticGallery() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="romantic-gallery">
        {images.map((img, i) => (
          <div
            key={i}
            className="romantic-photo"
            onClick={() => setSelected(img)}
          >
            <img src={img} alt="Memory" />
          </div>
        ))}
      </div>

      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <img src={selected} className="lightbox-img" alt="Zoomed" />
        </div>
      )}
    </>
  );
}
