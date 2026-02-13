import img1 from "../assets/couple1.jpg";
import img2 from "../assets/couple2.jpg";
import img3 from "../assets/couple3.jpg";

export default function FloatingPhotos() {
  const photos = [img1, img2, img3];

  return (
    <div className="floating-container">
      {photos.map((photo, i) => (
        <img key={i} src={photo} className="floating-photo" />
      ))}
    </div>
  );
}
