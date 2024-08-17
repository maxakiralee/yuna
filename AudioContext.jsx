import React, { createContext, useContext, useRef, useState } from 'react';

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const audioRefs = useRef({}); // Stores multiple audio references
  const [currentAudio, setCurrentAudio] = useState(null);

  const playAudio = (audioKey, src) => {
    // Stop current audio if playing
    if (currentAudio && audioRefs.current[currentAudio]) {
      audioRefs.current[currentAudio].pause();
      audioRefs.current[currentAudio].currentTime = 0;
    }

    // Check if the audioRef exists for the given key
    if (!audioRefs.current[audioKey]) {
      audioRefs.current[audioKey] = new Audio(src);
    }

    // Play the new audio
    setCurrentAudio(audioKey);
    audioRefs.current[audioKey].play();
  };

  const pauseAudio = (audioKey) => {
    if (audioRefs.current[audioKey]) {
      audioRefs.current[audioKey].pause();
    }
  };

  return (
    <AudioContext.Provider value={{ playAudio, pauseAudio }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudioContext() {
  return useContext(AudioContext);
}
