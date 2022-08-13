import { useState, useEffect } from "react";
import urlSong from "../assets/audio/song_one.mp3";

const useAudio = () => {
  const [audio] = useState(new Audio(urlSong));
  const [playing, setPlaying] = useState(true);

  const toggle = (val) => {
    setPlaying(val);
  };

  useEffect(() => {
    playing
      ? (() => {
          audio.play();
          audio.loop = true;
        })()
      : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

export { useAudio };
