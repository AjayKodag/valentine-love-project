import { useState } from "react";
import HeartAnimation from "./components/HeartTrail";
import LovePopup from "./components/LovePopup";
import FloatingPhotos from "./components/FloatingPhotos";
import GiftBox from "./components/GiftBox";
import Fireworks from "./components/Fireworks";
import LoveScanner from "./components/LoveScanner";
import CompatibilityMeter from "./components/CompatibilityMeter";
import LoveLetter from "./components/LoveLetter";
import Signature from "./components/Signature";
import Timeline from "./components/Timeline";
import TypingName from "./components/TypingName";
import Slideshow from "./components/Slideshow";
import PetalRain from "./components/PetalRain";
import HeartBurst from "./components/HeartBurst";
import MagicTouch from "./components/MagicTouch";




export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yes, setYes] = useState(false);

  const [scannerDone, setScannerDone] = useState(false);
  const [compatDone, setCompatDone] = useState(false);
  const [letterDone, setLetterDone] = useState(false);
  const [signatureDone, setSignatureDone] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);

  const messages = [
    "No",
    "Sneha… please? 🥺",
    "Are you sure baby? 😢",
    "Think again love ❤️",
    "It hurts Sneha 😭",
    "Ajay loves you so much 💖",
    "One more chance? 🥺",
    "Don't break my heart 😔",
    "Please Sneha… just say yes ❤️",
    "Ajay is crying inside 😭",
    "Baby pleaseee 🥹"
  ];

  return (
    <div className="main-container">

      {/* Always visible romantic effects */}
      <HeartAnimation />
      <LovePopup />
      <FloatingPhotos />
      <PetalRain />
      <MagicTouch />
      
      



      {/* Background Music */}
      <audio autoPlay loop>
        <source src="/assets/song.mp3" type="audio/mpeg" />
      </audio>

      {/* If timeline is opened */}
      {showTimeline ? (
        <Timeline />
      ) : !yes ? (
        /* BEFORE YES — Proposal Screen */
        <div className="proposal-card">

          <TypingName />

          <h2 className="proposal-text">Will you be my Valentine?</h2>

          <Slideshow />

          <div className="btns">
            <button
  className="yes-btn neon"
  style={{ transform: `scale(${1 + noCount * 0.15})` }}
  onClick={() => {
    setYes(true);
    setTimeout(() => {
      // trigger heart burst just after YES
      document.body.appendChild(document.createElement("div")).id = "heart-burst-trigger";
    }, 50);
  }}
>
  YES ❤️
</button>


            <button className="no-btn soft" onClick={() => setNoCount(noCount + 1)}>
              {messages[Math.min(noCount, messages.length - 1)]}
            </button>
          </div>

          <GiftBox />
        </div>
      ) : (
        /* AFTER YES — Cinematic Love Flow */
        <div className="yes-screen">

          <Fireworks />
          <HeartBurst />


          <h1 className="yes-title glow">Sneha ❤️ You Said YES!</h1>

          {/* Step 1 — Scanner */}
          {!scannerDone && (
            <LoveScanner onComplete={() => setScannerDone(true)} />
          )}

          {/* Step 2 — Compatibility Meter */}
          {scannerDone && !compatDone && (
            <CompatibilityMeter onComplete={() => setCompatDone(true)} />
          )}

          {/* Step 3 — Love Letter */}
          {scannerDone && compatDone && !letterDone && (
            <LoveLetter onComplete={() => setLetterDone(true)} />
          )}

          {/* Step 4 — Signature */}
          {letterDone && !signatureDone && (
            <Signature onComplete={() => setSignatureDone(true)} />
          )}

          {/* Step 5 — Timeline Button */}
          {signatureDone && (
           <button className="timeline-btn cinematic-btn" onClick={() => setShowTimeline(true)}>
  💕 See Our Love Story 💕
  <span className="shine"></span>
</button>

          )}

        </div>
      )}

      <p className="footer">Made with infinite love by Ajay ❤️</p>
    </div>
  );
}
