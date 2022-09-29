import { createContext, useContext, useState, useEffect } from "react";
import urlSong from "../assets/audio/song_one.mp3";

const Context = createContext();

export const StateAudioContext = ({ children }) => {
  const [audio, setAudio] = useState(new Audio(urlSong));
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const toggleAudio = (val) => {
    setPlaying(val);
  };

  const toggleMuted = (val) => {
    setMuted(val);
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
    audio.muted = muted;
  }, [muted]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  const value = {
    playing,
    muted,
    toggleAudio,
    toggleMuted,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useStateAudioContext = () => useContext(Context);
