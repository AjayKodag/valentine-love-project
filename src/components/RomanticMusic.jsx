import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import defaultSong from "../assets/song.mp3";

const RomanticMusic = forwardRef(function RomanticMusic(
  { play = false, src = defaultSong, volume = 0.3 },
  forwardedRef
) {
  const audioRef = useRef(null);

  useImperativeHandle(forwardedRef, () => audioRef.current);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    if (play) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [play, volume, src]);

  return (
    <audio
      ref={audioRef}
      loop
      playsInline
      preload="auto"
      style={{ display: "none" }}
    >
      <source src={src} type="audio/mpeg" />
    </audio>
  );
});

export default RomanticMusic;
