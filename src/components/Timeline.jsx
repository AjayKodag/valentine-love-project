import { useState } from "react";
import img1 from "../assets/couple1.jpg";
import img2 from "../assets/couple2.jpg";
import img3 from "../assets/couple3.jpg";
import img4 from "../assets/solo1.jpg";
import img5 from "../assets/solo2.jpg";
import RomanticGallery from "./RomanticGallery";


export default function Timeline() {
  const [selectedImg, setSelectedImg] = useState(null);

  const events = [
    { 
      date: "The Day We Met", 
      text: "A magical moment I will never forget.",
      img: img1
    }, 
    { 
      date: "First Smile", 
      text: "Your smile captured my heart instantly.",
      img: img2
    },
    { 
      date: "First Chat", 
      text: "Hours felt like seconds when we talked.",
      img: img3
    },
    { 
      date: "First Feeling", 
      text: "That was the moment I knew you are the one.",
      img: img4
    },
    { 
      date: "Today", 
      text: "I finally confessed through this app ❤️",
      img: img5
    }
    
  ];

 return (
  <div className="scrapbook">
    <h2 className="scrapbook-title">📖 Our Love Scrapbook 💕</h2>

    <div className="scrapbook-pages">
      {events.map((e, i) => (
        <div key={i} className="scrap-page fade-in-big">

          {e.img && (
            <img
              src={e.img}
              className="scrap-photo"
              alt="memory"
            />
          )}

          <h3 className="scrap-date">📌 {e.date}</h3>
          <p className="scrap-text">{e.text}</p>

          <span className="scrap-tape"></span>
        </div>
      ))}
    </div>

    {/* 💖 ADD THIS BELOW SCRAPBOOK PAGES */}
    <RomanticGallery />

  </div>
);

}
