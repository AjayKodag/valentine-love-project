const images = Object.values(
  import.meta.glob("../assets/*.{jpg,jpeg,png}", { eager: true })
).map((mod) => mod.default);

export default function ScrapbookGallery() {
  return (
    <div className="scrapbook-gallery">
      {images.map((img, i) => (
        <div key={i} className="scrap-photo">
          <img src={img} alt="Memory" />
        </div>
      ))}
    </div>
  );
}
